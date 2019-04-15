import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './../../../core/interfaces/UserInfo.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { Plugins, DeviceInfo } from '@capacitor/core';
import { PwaService } from '@app/features/marasco/core/services';
import { environment } from '@env/environment';
import { SwPush } from '@angular/service-worker';
const { Device } = Plugins;

@Component({
  selector: 'sa-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public calendar$;

  private unsubscribe$ = new Subject<void>();

  public isLoggedIn: boolean;
  public user: User;

  constructor(
    private _store: Store<any>,
    private _router: Router,
    private _swPush: SwPush,
    private _pwaService: PwaService
  ) {}

  ngOnInit() {
    const currentState = this._store.pipe(select(fromAuth.getUser));

    currentState.pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
      this.isLoggedIn = !!data;
      if (!!data) {
        this.user = data.user;
        this.initDevice();
      }
    });
  }

  createEvent($event) {
    this._router.navigate(['/wishlistPremiere/wishlists/details/0']);
  }

  async initDevice() {
    Device.getInfo()
      .then((result) => {
        let device = {
          uuid: result.uuid,
          diskFree: result.diskFree,
          osVersion: result.osVersion,
          memUsed: result.memUsed,
          batteryLevel: result.batteryLevel,
          model: result.model,
          platform: result.platform,
          manufacturer: result.manufacturer,
          isVirtual: result.isVirtual,
          mode: result.model,
          appVersion: result.appVersion
        };
        this.initNotification(device);
      })
      .catch((error) => {
        //For now do not disrupt user experience
      });
    //localStorage.setItem('device', JSON.stringify(device));
  }

  initNotification(deviceInfo: DeviceInfo) {
    let device = this.user.devices.find((result) => {
      return result.uuid === deviceInfo.uuid;
    });

    if (!!device) {
      return;
    }

    this._swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then((pushSubscription) => {
        // Save to
        //console.log(pushSubscription.toJSON());
        const follow = Object.assign(pushSubscription.toJSON());

      })
      .catch((error) => {
        // Do Nothing
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
