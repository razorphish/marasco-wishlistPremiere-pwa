import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './../../../core/interfaces/UserInfo.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { Plugins } from '@capacitor/core';
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

  constructor(private _store: Store<any>, private _router: Router) {}

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

    localStorage.setItem('device', JSON.stringify(device));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
