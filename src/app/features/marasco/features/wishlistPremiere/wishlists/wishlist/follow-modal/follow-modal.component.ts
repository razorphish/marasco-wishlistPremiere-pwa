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
import {
  WishlistFollowService,
  LayoutService
} from '@app/features/marasco/core/services';
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

  private unsubscribe$ = new Subject<void>();

  /**============Publicly exposed properties ========== */
  public device: any;
  public pushToken: any;
  public validationOptions: any;
  public isMobile: boolean;

  constructor(
    private _notificationService: NotificationService,
    private _activityLogService: ActivityLogSubjectService,
    private _wishlistFollowService: WishlistFollowService,
    private _modalService: BsModalService,
    private _swPush: SwPush,
    private _layoutService: LayoutService
  ) {
    const initialState: any = this._modalService.config.initialState;
    this.wishlist = initialState.wishlist;
    this.wishlistFollow = {
      wishlistId: this.wishlist._id,
      notifiedOnAddItem: true,
      notifiedOnRemoveItem: true,
      notifiedOnCompletion: true
    };
  }

  ngOnInit() {
    //Sets mobile
    this.isMobile = this._layoutService.store.isMobile;

    this.validationOptions = {
      // Rules for form validation
      wishlist: this.wishlist,
      user: this.user,
      isMobile: this.isMobile,
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
      submitHandler: this.saveFollow,
      saveMobile: this.saveMobile,
      saveWeb: this.saveWeb
      //submitHandler: this.followWishlist
    };

    this.initDevice();
    this.initMobilePushToken();
  }

  async initDevice() {
    const localStorageItem = await localStorage.getItem(environment.devicekey);
    const device = JSON.parse(localStorageItem);

    this.device = device;
    this.validationOptions.device = device;
  }

  async initMobilePushToken() {
    const localStoragePushToken = await localStorage.getItem(
      environment.pushTokenKey
    );

    const pushToken = JSON.parse(localStoragePushToken);

    this.pushToken = pushToken;
    this.validationOptions.pushToken = pushToken;
  }

  public saveFollow($event) {
    if (this['settings'].isMobile) {
      this['settings'].saveMobile($event);
    } else {
      this['settings'].saveWeb($event);
    }
  }

  public saveMobile($event) {
    const that: any = this;
    let wishlist: Wishlist = that.wishlist;
    let follow: WishlistFollow = {
      wishlistId: wishlist._id,
      userId: that.user._id,
      device: that.device,
      notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
      notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
      notifiedOnCompletion: $event.elements.notifiedOnCompletion.checked,
      pushToken: that.pushToken,
      schemaType: environment.notificationSchema.mobile
    };

    that.wishlistFollowService
      .insert(follow)
      .pipe(takeUntil(that.unsub))
      .subscribe(
        (item) => {
          if (item) {
            that.activityLogService.addUpdate(
              `Inserted wishlist follow ${item._id}`
            );
            that.notificationService.smallBox({
              title: 'Wishlist Follow Success!',
              content: 'You are now following this wishlist ',
              color: '#739E73',
              timeout: 2000, // 2 seconds
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            that.close.emit(true);
          } else {
            that.activityLogService.addError(
              'No wishlist present: Insert Failed'
            );
            that.notificationService.bigBox({
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
          that.activityLogService.addError(err);
          that.notificationService.bigBox({
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

  public saveWeb($event) {
    const that: any = this;

    let model: WishlistFollow = {
      wishlistId: that.wishlist._id,
      userId: that.user._id,
      device: that.device,
      notifiedOnAddItem: $event.elements.notifiedOnAddItem.checked,
      notifiedOnRemoveItem: $event.elements.notifiedOnRemoveItem.checked,
      notifiedOnCompletion: $event.elements.notifiedOnCompletion.checked,
      wishlist: that.wishlist,
      schemaType: environment.notificationSchema.web
    };

    that.swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then(
        (pushSubscription) => {
          // Save to
          if (!!pushSubscription) {
            const follow = Object.assign(model, pushSubscription.toJSON());

            that.wishlistFollowService
              .insert(follow)
              .pipe(takeUntil(that.unsub))
              .subscribe(
                (item) => {
                  if (item) {
                    that.activityLogService.addUpdate(
                      `Inserted wishlist follow ${item._id}`
                    );
                    that.notificationService.smallBox({
                      title: 'Wishlist Follow Success!',
                      content: 'You are now following this wishlist ',
                      color: '#739E73',
                      timeout: 2000,
                      icon: 'fa fa-check',
                      number: '4',
                      sound: false
                    });
                    that.close.emit(true);
                  } else {
                    that.activityLogService.addError(
                      'No wishlist present: Insert Failed'
                    );
                    that.notificationService.bigBox({
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
                  that.activityLogService.addError(err);
                  that.notificationService.bigBox({
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
          } else {
            that.activityLogService.addError(
              'No wishlist follow: Insert Failed'
            );
            that.notificationService.bigBox({
              title: 'Oops! There is no subscription',
              content:
                'No follow returned which means that the follow was not created',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 3000, // 3 seconds
              sound: false
            });
          }
        }
        // ,(reason) => {
        //   that.notificationService.smallBox({
        //     title: 'Unable to resolve!',
        //     content: `The error received was ${reason}`,
        //     color: '#C46A69',
        //     icon: 'fa fa-warning shake animated',
        //     number: '1',
        //     timeout: 3000, // 3 seconds
        //     sound: false
        //   });
        // }
      )
      .catch((error) => {
        //An error typically means that the device is not supported
        // so let's change some item properties to manage this
        // model.notifiedOnAddItem = false;
        // model.notifiedOnRemoveItem = false;
        // model.notifiedOnCompletion = false;

        let isCurrentUser = that.user._id === that.wishlist.userId;

        that.wishlistFollowService
          .insert(model, isCurrentUser)
          .pipe(takeUntil(that.unsub))
          .subscribe(
            (item) => {
              if (item) {
                that.activityLogService.addUpdate(
                  `Inserted wishlist follow ${item._id}`
                );
                that.notificationService.smallBox({
                  title: 'Wishlist Follow Success!',
                  content:
                    'You are now following this wishlist!  Notifications are not supported on this device ',
                  color: '#C79121',
                  timeout: 6000, // 6 seconds
                  icon: 'fa fa-shield fadeInLeft animated',
                  number: '4',
                  sound: false
                });
                that.close.emit(true);
              } else {
                that.activityLogService.addError(
                  'No wishlist present: Insert Failed'
                );
                that.notificationService.bigBox({
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
              that.activityLogService.addError(err);
              that.notificationService.bigBox({
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
