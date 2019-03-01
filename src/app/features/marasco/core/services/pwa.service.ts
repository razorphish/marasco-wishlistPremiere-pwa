import { environment } from './../../../../../environments/environment';
import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class PwaService {
  showBtn = false;
  deferredPrompt: any;

  constructor(
    private _swUpdate: SwUpdate,
    private _swPush: SwPush,
    private _snackbar: MatSnackBar
  ) {}

  load() {
    this.initServiceWorkerUpdate();
    this.initInstallPrompt();
  }

  initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;

      // Update UI by showing a button to notify the user they can add to home screen
      // return false;
    });

    // button click event to show the promt

    window.addEventListener('appinstalled', (event) => {
      console.log('App installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('display-mode is standalone');
    }
  }

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

      this._swPush
        .requestSubscription({
          serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
        })
        .then((pushSubscription) => {
          // Save to
          console.log(pushSubscription.toJSON());
        });
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
        environment.log && 
          console.log('User refused the prompt', choiceResult);
      }
      this.deferredPrompt = null;
    });
  }
}

export function PwaFactory(service: PwaService): Function {
  return () => service.load();
}
