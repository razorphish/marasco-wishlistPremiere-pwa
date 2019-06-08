import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import * as urlParse from 'url-parse';

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
  PushNotificationToken,
  AppState,
  AppUrlOpen
} from '@capacitor/core';

const { Device } = Plugins;
const { PushNotifications } = Plugins;
const { App } = Plugins;

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

  constructor(private _layoutService: LayoutService, private _router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.initPushNotifications();
    this.initDevice();
  }

  async initAndroidAppState() {
    App.addListener('appStateChange', (state: AppState) => {
      // state.isActive contains the active state
      // console.log('1. App state changed. Is active?', state.isActive);

      if (state.isActive) {
        //Do something when app is in foreground
        //alert(`Url is : ${this._router.url}`);
      } else {
        //Do something whe app is in background
      }
    });

    var ret = await App.canOpenUrl({ url: 'com.wishlistPremiere.marasco' });
    // console.log('2. Can open url: ', ret.value);

    //If app can open with url
    if (ret.value) {
      var getLaunchUrl = await App.getLaunchUrl();
      if (ret && getLaunchUrl.url) {
        this.navigate(getLaunchUrl.url);
      }
    }

    //var openUrl = await App.openUrl({
    //  url: 'com.wishlistPremiere.marasco://wishlistPremiere/wishlists/5cd0a071c7d3825528f732a7'
    //});
    //console.log('3. Open url response: ', openUrl);
    //alert(`3. Open url response: ${JSON.stringify(openUrl)}`);

    // var getLaunchUrl = await App.getLaunchUrl();
    // if (ret && getLaunchUrl.url) {
    //   console.log('4. App opened with URL: ' + getLaunchUrl.url);
    //   alert(`4. App opened with URL: ${getLaunchUrl.url}`);
    // }

    // console.log('5. Launch url: ', getLaunchUrl);
    // alert(`5. Launch url: ${JSON.stringify(getLaunchUrl)}`);

    App.addListener('appUrlOpen', (urlOpen: AppUrlOpen) => {
      //console.log('6. App opened with URL: ', urlOpen);
      //alert(`6. App opened with URL: ${JSON.stringify(urlOpen)}`);
      this.navigate(urlOpen.url);
    });

    // App.addListener('appRestoredResult', (data: any) => {
    //   alert(`7. Restored state: ${JSON.stringify(data)}`);
    //   console.log('7. Restored state:', data);
    // });
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

    switch (device.platform) {
      case 'ios':
        this.initiOSAppState();
        break;
      case 'android':
        this.initAndroidAppState();
        break;
    }
  }

  async initiOSAppState() {
    App.addListener('appStateChange', (state: AppState) => {
      // state.isActive contains the active state

      if (state.isActive) {
        //Do something when app is in foreground
        //alert(`Url is : ${this._router.url} [${state.isActive}]`);
      } else {
        //Do something whe app is in background
        //alert(state.isActive);
      }
    });

    // var ret = await App.canOpenUrl({ url: 'com.marasco.wishlistPremiere' });
    // alert(`2. Can open url [com.marasco.wishlistPremiere]: ${ret.value}`);


    // var ret2 = await App.canOpenUrl({ url: 'marascowishlist' });
    // alert(`2. Can open url [marascowishlist]: ${ret2.value}`);

    // var ret3 = await App.canOpenUrl({ url: 'com.wishlistPremiere.marasco' });
    // alert(`2. Can open url [com.wishlistPremiere.marasco]: ${ret3.value}`);

    var ret = await App.canOpenUrl({ url: 'http:' });
    //alert(`2. Can open url [https]:  ${ret4.value}`);

    // var getLaunchUrl = await App.getLaunchUrl();
    // if (ret && getLaunchUrl.url) {
    //   //console.log('4. App opened with URL: ' + getLaunchUrl.url);
    //   //alert(`4. App opened with URL: ${getLaunchUrl.url}`);
    // }

    //If app can open with url
    if (ret.value) {
      var getLaunchUrl = await App.getLaunchUrl();
      if (ret && getLaunchUrl.url) {
        //alert(getLaunchUrl.url);
        this.navigate(getLaunchUrl.url);
      }
    }

    App.addListener('appUrlOpen', (urlOpen: AppUrlOpen) => {
      //alert(`AppUrlOpen ${urlOpen.url}`)
      this.navigate(urlOpen.url);
    });
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

  navigate(uri: string) {
    let serialized = urlParse(uri);
    let pathname = serialized.pathname;
    let s = pathname.substring(
      pathname.indexOf(environment.deepLinkId) + environment.deepLinkId.length,
      pathname.length
    );
    this._router.navigate([s]);
  }
}
