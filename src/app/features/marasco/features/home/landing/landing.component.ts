import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { User } from './../../../core/interfaces/UserInfo.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { Plugins, DeviceInfo } from '@capacitor/core';
import { UserService } from '@app/features/marasco/core/services';
import { environment } from '@env/environment';
import { SwPush } from '@angular/service-worker';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { UserNotification } from '@app/features/marasco/core/interfaces/User-Notification.interface';
import { UserInfo } from '@app/features/marasco/core/models/userInfo.model';
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
    private _activityLogService: ActivityLogSubjectService,
    private _userService: UserService
  ) {}

  addNotification(uuid: string) {
    this._swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then((pushSubscription) => {
        // Save to
        //console.log(pushSubscription.toJSON());
        const notification: UserNotification = Object.assign(
          pushSubscription.toJSON()
        );

        notification.uuid = uuid;
        notification.userId = this.user._id;
        this.user.notifications.push(notification);

        this._userService
          .addNotification(this.user._id, this.user.notifications)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(
            (item) => {
              if (item) {
                //TODO: Add update to user store HERE
                //this._store.dispatch(new actions.AuthUserChange(this.user));
              } else {
                //Do Nothing
              }
            },
            (err) => {
              this._activityLogService.addError(err);
            },
            () => {
              // Clean up
            }
          );
      })
      .catch((error) => {
        // Do Nothing
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
        this.addDevice(device);
        this.addNotification(device.uuid);
      })
      .catch((error) => {
        //For now do not disrupt user experience
      });
    //localStorage.setItem('device', JSON.stringify(device));
  }

  addDevice(deviceInfo: DeviceInfo) {
    let device = this.user.devices.find((result) => {
      return result.uuid === deviceInfo.uuid;
    });

    if (!!device) {
      return;
    }

    this.user.devices.push(deviceInfo);

    this._userService
      .addDevice(this.user._id, this.user.devices)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (item: UserInfo) => {
          if (item) {
            // let userSource = new UserInfo(item);
            // this._store.dispatch(new actions.AuthUserChange(userSource));
          } else {
            //Do Nothing
          }
        },
        (err) => {
          this._activityLogService.addError(err);
        },
        () => {
          // Clean up
        }
      );
  }

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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
