import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PwaService {
  installable: boolean = false;
  deferredPrompt: any;
  pushSubscription: any;

  public onBeforeInstallPrompt = new BehaviorSubject<any>(this.deferredPrompt);

  constructor(
    private _swUpdate: SwUpdate,
    private _swPush: SwPush,
    private _snackbar: MatSnackBar
  ) {}

  load() {
    this.initServiceWorkerUpdate();
    this.initInstallPrompt();
    //this.initPushNotification();
  }

  initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;
      // will be used to determine if prompt exists or not
      // could use boolean here;
      this.onBeforeInstallPrompt.next(e);

      // Update UI by showing a button to notify the user they can add to home screen
      // return false;
      this.installable = true;
    });

    // button click event to show the promt

    window.addEventListener('appinstalled', (event) => {
      console.log('App installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
    }
  }
  
  /**
   * @description Initializes whether this device can and will accept push notifications
   * @author Antonio Marasco
   * @date 2019-04-28
   * @memberof PwaService
   */
  initPushNotification() {
    this._swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then((pushSubscription) => {
        // Save to
        const subscription = pushSubscription.toJSON();
        environment.log.wishlist &&
          console.log(
            (!!subscription
              ? 'Push Subscription exists exist'
              : 'Push Subscription does not exist') + ' at boot'
          );

        localStorage.setItem(
          environment.pushNotificationkey,
          JSON.stringify(subscription)
        );

        this.pushSubscription = subscription;
      })
      .catch((error) => {
        //Usually indicates that the user's device does not support push notifications
      });
  }

  /**
   * @description Called when there is a web update
   * @author Antonio Marasco
   * @date 2019-04-28
   * @memberof PwaService
   */
  initServiceWorkerUpdate() {
    this._swUpdate.available.subscribe((update) => {
      environment.log.auth && console.log('update available', update);

      // Allow the user to refresh
      const snack = this._snackbar.open('Update Available', 'Reload');

      snack.onAction().subscribe(() => {
        window.location.reload();
      });

      this._swPush.messages.subscribe((message) => {
        this._snackbar.open(JSON.stringify(message));
      });

      environment.log.auth &&
        console.log(
          'public key',
          environment.serviceWorkerOptions.vap.publicKey
        );
    });
  }

  prompt() {
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        environment.log &&
          console.log('User accepted the prompt', choiceResult);
      } else {
        environment.log && console.log('User refused the prompt', choiceResult);
      }
      this.deferredPrompt = null;
      this.onBeforeInstallPrompt.next(null);
    });
  }
}

export function PwaFactory(service: PwaService): Function {
  return () => service.load();
}
