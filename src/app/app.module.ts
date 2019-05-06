import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  LoginOpt
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';
import { LightboxModule } from 'ngx-lightbox';

import {
  Plugins,
  PushNotification,
  PushNotificationActionPerformed,
  PushNotificationToken
} from '@capacitor/core';
const { Device } = Plugins;

//https://developers.facebook.com/apps/872380819606437/dashboard/
const fbLoginOptions: LoginOpt = {
  //scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  scope: 'email',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

const linkedInLoginOptions: LoginOpt = {
  scope: 'r_emailaddress'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      '102181083399-btfafgbina8ldqgr8tmjdqmc7gtaoji7.apps.googleusercontent.com',
      googleLoginOptions
    )
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('793246911052349', fbLoginOptions)
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('86zhw0hrwwcutx', false, 'en_US')
  }
]);

export function provideConfig() {
  return config;
}

import { MarascoRoutingModule } from './features/marasco/marasco-routing.module';
import { MarascoComponent } from './features/marasco/marasco.component';
import { CoreModule } from './features/marasco/core/core.module';
import { SharedModule } from './features/marasco/shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatSnackBarModule } from '@angular/material';
import { environment } from '../environments/environment';
import { LayoutService } from './features/marasco/core/services';

const { PushNotifications } = Plugins;

@NgModule({
  declarations: [MarascoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarascoRoutingModule,
    SharedModule,
    MatSnackBarModule,
    CoreModule,
    SocialLoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    LightboxModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [MarascoComponent]
})
export class AppModule {
  notifications: any = [];

  constructor(private _layoutService: LayoutService) {
    this.initDevice();
    this.initPushNotifications();
  }

  async initDevice() {
    const info = await Device.getInfo();
    let device = {
      uuid: info.uuid,
      diskFree: info.diskFree,
      osVersion: info.osVersion,
      memUsed: info.memUsed,
      batteryLevel: info.batteryLevel,
      model: info.model,
      platform: info.platform,
      manufacturer: info.manufacturer,
      isVirtual: info.isVirtual,
      mode: info.model,
      appVersion: info.appVersion
    };

    localStorage.setItem(environment.devicekey, JSON.stringify(device));
  }

  initPushNotifications() {
    if (this._layoutService.store.isMobile) {
      PushNotifications.register();

      PushNotifications.addListener(
        'registration',
        (token: PushNotificationToken) => {
          localStorage.setItem(environment.pushNotificationkey, token.value);
        }
      );

      PushNotifications.addListener('registrationError', (error: any) => {
        //console.log('error on register ' + JSON.stringify(error));
      });

      PushNotifications.addListener(
        'pushNotificationReceived',
        (notification: PushNotification) => {
          //console.log('notification ' + JSON.stringify(notification));
          this.notifications.push(notification);
        }
      );

      PushNotifications.addListener(
        'pushNotificationActionPerformed',
        (notification: PushNotificationActionPerformed) => {
          //console.log('notification ' + JSON.stringify(notification));
          this.notifications.push(notification);
        }
      );
    }
  }
}

//constructor(swUpdate: SwUpdate, swPush: SwPush, snackbar: MatSnackBar){
// swUpdate.available.subscribe((update) => {

//   environment.log.auth &&
//         console.log('update available', update);

//   // Allow the user to refresh
//   const snack = snackbar.open('Update Available', 'Reload');

//   snack
//     .onAction()
//     .subscribe(() => {
//       window.location.reload();
//     });

//   swPush.messages.subscribe((message) => {
//     console.log(message);
//     snackbar.open(JSON.stringify(message));
//   });

//   environment.log.auth &&
//     console.log('public key', environment.serviceWorkerOptions.vap.publicKey);

//   swPush.requestSubscription({
//     serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
//   })
//     .then(pushSubscription => {
//       // Save to
//       console.log(pushSubscription.toJSON());
//     });
// });
