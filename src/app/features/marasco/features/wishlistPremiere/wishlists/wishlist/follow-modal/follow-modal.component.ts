import { NotificationService } from '../../../../../core/services/notification.service';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnDestroy
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';

import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivityLogSubjectService } from '@app/features/marasco/shared/activitylog.subject-service';
import { WishlistFollow } from '@app/features/marasco/core/interfaces/Wishlist-Follow.interface';
import { WishlistFollowService } from '@app/features/marasco/core/services';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { SwPush } from '@angular/service-worker';
import { environment } from '@env/environment';

import { Plugins, DeviceInfo } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'wishlist-follow-modal',
  templateUrl: './follow-modal.component.html',
  styleUrls: ['./follow-modal.component.css']
})
export class WishlistFollowModalComponent implements OnInit, OnDestroy {
  //*=================I/O============================= */
  @Input() wishlist: Wishlist;
  @Input() user: User;
  @Input() public options = {
    mode: 'popup',
    disabled: false,
    inline: true
  };

  @Output() save = new EventEmitter();
  @Output() close = new EventEmitter();

  public wishlistFollow: WishlistFollow;

  /**============Privately exposed properties ========= */
  private _device: any;
  private unsubscribe$ = new Subject<void>();

  /**============Publicly exposed properties ========== */
  public validationOptions: any;

  constructor(
    private _notificationService: NotificationService,
    private _activityLogService: ActivityLogSubjectService,
    private _wishlistFollowService: WishlistFollowService,
    private _modalService: BsModalService,
    private _swPush: SwPush
  ) {
    const initialState: any = this._modalService.config.initialState;
    this.wishlist = initialState.wishlist;
    this.wishlistFollow = {
      wishlistId: this.wishlist._id,
      notifiedOnAddItem: true,
      notifiedOnRemoveItem: true,
      notifyOnCompletion: true
    };
  }

  ngOnInit() {
    this.validationOptions = {
      // Rules for form validation
      wishlist: this.wishlist,
      user: this.user,
      rules: {
        name: {
          required: true
        }
      },

      // Messages for form validation
      messages: {
        name: {
          required: 'Please enter a name for the item'
        }
      },
      wishlistFollowService: this._wishlistFollowService,
      activityLogService: this._activityLogService,
      notificationService: this._notificationService,
      swPush: this._swPush,
      close: this.close,
      unsub: this.unsubscribe$,
      //submitHandler: this.saveThis,
      submitHandler: this.followWishlist
    };

    this.initDevice();
  }

  async initDevice() {
    const localStorageItem = localStorage.getItem(environment.devicekey);
    const device = JSON.parse(localStorageItem);

    this._device = device;
    this.validationOptions.device = device;
  }

  public followWishlist($event) {
    let wishlist: Wishlist = this['settings'].wishlist;
    let model: WishlistFollow = {
      wishlistId: wishlist._id,
      userId: this['settings'].user._id,
      device: this['settings'].device,
      notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
      notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
      notifyOnCompletion: $event.elements.notifyOnCompletion.checked,
      wishlist: wishlist
    };

    let swPush = this['settings'].swPush;

    swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then(
        (pushSubscription) => {
          // Save to
          const follow = Object.assign(model, pushSubscription.toJSON());

          this['settings'].wishlistFollowService
            .insert(follow)
            .pipe(takeUntil(this['settings'].unsub))
            .subscribe(
              (item) => {
                if (item) {
                  this['settings'].activityLogService.addUpdate(
                    `Inserted wishlist follow ${item._id}`
                  );
                  this['settings'].notificationService.smallBox({
                    title: 'Wishlist Follow Success!',
                    content: 'You are now following this wishlist ',
                    color: '#739E73',
                    timeout: 2000,
                    icon: 'fa fa-check',
                    number: '4',
                    sound: false
                  });
                  this['settings'].close.emit(true);
                } else {
                  this['settings'].activityLogService.addError(
                    'No wishlist present: Insert Failed'
                  );
                  this['settings'].notificationService.bigBox({
                    title: 'Oops! the database has returned an error',
                    content:
                      'No follow returned which means that the follow was not created',
                    color: '#C46A69',
                    icon: 'fa fa-warning shake animated',
                    number: '1',
                    timeout: 3000, // 3 seconds
                    sound: false
                  });
                }
              },
              (err) => {
                this['settings'].activityLogService.addError(err);
                this['settings'].notificationService.bigBox({
                  title: 'Oops!  there is an issue with the call to insert',
                  content: err,
                  color: '#C46A69',
                  icon: 'fa fa-warning shake animated',
                  number: '1',
                  timeout: 3000, // 3 seconds
                  sound: false
                });
              },
              () => {
                // Clean up
              }
            );
        },
        (reason) => {
          this['settings'].notificationService.smallBox({
            title: 'Unable to resolve!',
            content: `The error received was ${reason}`,
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 3000, // 3 seconds
            sound: false
          });
        }
      )
      .catch((error) => {
        //An error typically means that the device is not supported
        // so let's change some item properties to manage this
        model.notifiedOnAddItem = false;
        model.notifiedOnRemoveItem = false;
        model.notifyOnCompletion = false;

        let isCurrentUser = this['settings'].user._id === wishlist.userId;

        this['settings'].wishlistFollowService
          .insert(model, isCurrentUser)
          .pipe(takeUntil(this['settings'].unsub))
          .subscribe(
            (item) => {
              if (item) {
                this['settings'].activityLogService.addUpdate(
                  `Inserted wishlist follow ${item._id}`
                );
                this['settings'].notificationService.smallBox({
                  title: 'Wishlist Follow Success!',
                  content:
                    'You are now following this wishlist!  Notifications are not supported on this device ',
                  color: '#C79121',
                  timeout: 6000, // 6 seconds
                  icon: 'fa fa-shield fadeInLeft animated',
                  number: '4',
                  sound: false
                });
                this['settings'].close.emit(true);
              } else {
                this['settings'].activityLogService.addError(
                  'No wishlist present: Insert Failed'
                );
                this['settings'].notificationService.bigBox({
                  title: 'Oops! the database has returned an error',
                  content:
                    'No follow returned which means that the follow was not created',
                  color: '#C46A69',
                  icon: 'fa fa-warning shake animated',
                  number: '1',
                  timeout: 3000, // 3 seconds
                  sound: false
                });
              }
            },
            (err) => {
              this['settings'].activityLogService.addError(err);
              this['settings'].notificationService.bigBox({
                title: 'Oops!  there is an issue with the call to insert',
                content: err,
                color: '#C46A69',
                icon: 'fa fa-warning shake animated',
                number: '1',
                timeout: 3000, // 3 seconds
                sound: false
              });
            },
            () => {
              // Clean up
            }
          );
      });
  }

  public saveThis($event) {
    let wishlist: Wishlist = this['settings'].wishlist;
    let model: WishlistFollow = {
      wishlistId: wishlist._id,
      userId: this['settings'].user._id,
      notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
      notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
      notifyOnCompletion: $event.elements.notifyOnCompletion.checked
    };

    this['settings'].wishlistFollowService
      .insert(model)
      .pipe(takeUntil(this['settings'].unsub))
      .subscribe(
        (item) => {
          if (item) {
            this['settings'].activityLogService.addUpdate(
              `Inserted wishlist follow ${item._id}`
            );
            this['settings'].notificationService.smallBox({
              title: 'Wishlist Follow Success!',
              content: 'You are now following this wishlist ',
              color: '#739E73',
              timeout: 2000, // 2 seconds
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            this['settings'].close.emit(true);
          } else {
            this['settings'].activityLogService.addError(
              'No wishlist present: Insert Failed'
            );
            this['settings'].notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'No follow returned which means that the follow was not created',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 3000, // 3 seconds
              sound: false
            });
          }
        },
        (err) => {
          this['settings'].activityLogService.addError(err);
          this['settings'].notificationService.bigBox({
            title: 'Oops!  there is an issue with the call to insert',
            content: err,
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 3000, // 3 seconds
            sound: false
          });
        },
        () => {
          // Clean up
        }
      );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
