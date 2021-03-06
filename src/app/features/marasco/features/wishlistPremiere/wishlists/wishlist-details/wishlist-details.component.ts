import { UserService } from './../../../../core/services/user.service';
import { WishlistItemSort } from '../../../../core/interfaces/Wishlist-item-sort.interface';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  TemplateRef,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { NotificationService } from '../../../../core/services/notification.service';
import { ActivityLogSubjectService } from '../../../../shared/activitylog.subject-service';
import { Wishlist } from '../../../../core/interfaces/Wishlist.interface';
import { WishlistService } from '../../../../core/services/wishlists.service';
import { WishlistFactory } from '../../../../core/services/wishlist.factory';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { WishlistItem } from '@app/features/marasco/core/interfaces/Wishlist-item.interface';
import { LayoutService } from '@app/features/marasco/core/services';
import { environment } from '@env/environment';

import { Plugins, DeviceInfo } from '@capacitor/core';
import { UserInfo } from '@app/features/marasco/core/models/userInfo.model';
import { SwPush } from '@angular/service-worker';
import { UserNotification } from '@app/features/marasco/core/interfaces/User-Notification.interface';

import { SubSink } from 'subsink';
import { WishlistOptionsModalComponent } from './options-modal/options-modal.component';

const { Share } = Plugins;
const { Device } = Plugins;
let nav: any = navigator;

/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 * http://sortablejs.github.io/Sortable/
 */
@Component({
  selector: 'marasco-wishlist-details',
  templateUrl: 'wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.css']
})
export class WishlistDetailsComponent implements OnInit, OnDestroy {
  //////////////////Private variables///////////
  private subs$ = new SubSink();
  //////////////END Private variables //////////

  //////////////////Publicly exposed variables///////////

  public defaultWishlist: Wishlist = {
    name: '',
    userId: '',
    preferences: {
      includePriceWhenSharing: true,
      markPurchasedItem: false,
      hideFromMe: false,
      currencyUnitSymbol: '$',
      notifyOnAddItem: true,
      notifyOnRemoveItem: true,
      notifyOnClose: true,
      collaborative: false
    },
    items: []
  };

  public dropdownSettingsStatus = {};

  public isDeleted: boolean;
  public isMobile = true;
  public isUpdate = true;
  public hasSharing = false;
  public surpriseMe: boolean = false;

  public itemSortOptions = {
    handle: '.handle', // handle's class
    onUpdate: (event: any) => {
      let wishlistItemSort: WishlistItemSort = {
        wishlistId: this.wishlist._id,
        wishlistItemId:
          event.item.children[0].children[0].children[0].children[0].value,
        oldIndex: event.oldIndex,
        newIndex: event.newIndex
      };

      this._store.dispatch(
        new fromWishlist.SortWishlistItemAction(wishlistItemSort)
      );
    },
    animation: 150
  };

  public options = [];
  public optionsTokenTable: any = {};

  public selectedStatus = [];

  public state: any = {
    tabs: {
      demo1: 0
    }
  };

  public user: User;

  public validationOptions: any = {
    // Rules for form validation
    rules: {
      name: {
        required: true
      },
      userId: {
        required: true
      },
      statusId: {
        required: true
      }
    },

    // Messages for form validation
    messages: {
      name: {
        required: 'Please enter your name'
      },
      wishlistId: {
        required: 'Please enter a wishlist'
      },
      statusId: {
        required: 'Please enter a status'
      }
    }
  };

  public wishlist: Wishlist = this.defaultWishlist;

  // @Input() filter = 'ion ([7-9]|[1][0-2])';
  @Input() filter = '';

  @ViewChild('wishlistDetailsForm') wishlistDetailsForm;

  bsModalRef: BsModalRef;

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _wishlistService: WishlistService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _notificationService: NotificationService,
    private _factory: WishlistFactory,
    private _activityLogService: ActivityLogSubjectService,
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService,
    private _layoutService: LayoutService,
    private _userService: UserService,
    private _swPush: SwPush
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.subs$.add(
      this._route.params.subscribe(params => {
        const id = params['id'];
        if (id !== '0') {
          this.wishlist = this._route.snapshot.data['wishlist'];
          this.selectedStatus.push(this.wishlist.statusId);
          this.isUpdate = true;
        } else {
          this.wishlist = this.defaultWishlist;
          this.isUpdate = false;
        }
      })
    );

    this.activate();
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public closeModal() {
    this.bsModalRef.hide();
  }

  public deleteItem($event, wishlistItem: WishlistItem) {
    $event.preventDefault();
    this._store.dispatch(
      new fromWishlist.DeleteWishlistItemAction(wishlistItem)
    );
  }

  public openModal(
    event,
    template: TemplateRef<any>,
    wishlistItem: WishlistItem
  ) {
    const initialState = {
      wishlistItem: wishlistItem || {
        name: '',
        purchased: false,
        categoryId: 0
      }
    };

    event.preventDefault();
    this.bsModalRef = this._modalService.show(template, { initialState });
  }

  public openModalSettings(
    event,
    template: TemplateRef<any>,
    wishlist: Wishlist
  ) {
    const initialState = {
      wishlist: wishlist || {
        name: ''
      }
    };

    event.preventDefault();
    this.bsModalRef = this._modalService.show(template, { initialState });
  }

  public openOptionsModal(event, wishlist: Wishlist) {
    const initialState = {
      wishlist: wishlist || {
        name: ''
      }
    };

    event.preventDefault();
    this.bsModalRef = this._modalService.show(WishlistOptionsModalComponent, {
      initialState
    });
    this.bsModalRef.content.close.subscribe(result => {
      if (result !== 'close') {
        this.surpriseMe = result.preferences.hideFromMe;
      }

      this.bsModalRef.hide();
    });
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public previewWishlist($event, wishlist: Wishlist) {
    $event.preventDefault();
    this._router.navigateByUrl(`wishlistPremiere/wishlists/${wishlist._id}`);
  }

  public save(wishlistDetailsForm: any) {
    if (this.validate()) {
      if (this.isUpdate) {
        this.update();
      } else {
        this.insert();
      }
    }
  }

  async shareDesktop() {
    if (nav.share) {
      nav
        .share({
          title: 'Check out my new wishlist!',
          text: 'Click on the link to follow my new wishlist!',
          url: `${environment.deepLinkUrlWeb}/wishlistPremiere/wishlists/${
            this.wishlist._id
          }`
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    }
  }

  async shareMobile() {
    let shareRet = await Share.share({
      title: 'Check out my new wishlist!',
      text: 'Click on the link to follow my new wishlist!',
      url: `${environment.deepLinkUrl}${this.wishlist._id}`,
      dialogTitle: 'Share with friends and family'
    });
  }

  /////////////////////////////////////
  // Private Metods
  /////////////////////////////////////
  /**
   * Activate the component
   */
  private activate() {
    //Gets current state of the app
    this.activateState();

    //Set User info
    this.wishlist.userId = this.user._id;

    //Check if browser has navigation share
    this.hasSharing = nav.share ? true : false;

    //Drop down settings
    this.dropdownSettingsStatus = {
      singleSelection: true,
      idField: '_id',
      textField: 'name'
    };

    //Determine if users wants the buttons to be hidden
    this.surpriseMe = this.wishlist.preferences.hideFromMe;
  }

  private activateState() {
    const currentState = this._store.pipe(select(fromAuth.getUser));

    this.subs$.add(
      currentState.subscribe(data => {
        if (!!data) {
          this.user = data.user;
        }
      })
    );

    //Sets mobile
    this.isMobile = this._layoutService.store.isMobile;

    this.subs$.add(
      this._wishlistService.onWishlistChanged.subscribe(wishlist => {
        if (!!wishlist && wishlist._id === this.wishlist._id) {
          this.wishlist = wishlist;
        }
      })
    );
  }

  /**
   * @description Adds device to user
   * @author Antonio Marasco
   * @date 2019-04-26
   * @param {DeviceInfo} deviceInfo
   * @returns
   * @memberof WishlistDetailsComponent
   */
  addDevice(deviceInfo: DeviceInfo) {
    let device = this.user.devices.find(result => {
      return result.uuid === deviceInfo.uuid;
    });

    if (!!device) {
      return;
    }

    this.user.devices.push(deviceInfo);

    this.subs$.add(
      this._userService.addDevice(this.user._id, this.user.devices).subscribe(
        (item: UserInfo) => {
          if (item) {
            // let userSource = new UserInfo(item);
            // this._store.dispatch(new actions.AuthUserChange(userSource));
          } else {
            //Do Nothing
          }
        },
        err => {
          this._activityLogService.addError(err);
        },
        () => {
          // Clean up
        }
      )
    );
  }

  addNotification(uuid: string) {
    this._swPush
      .requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
      .then(pushSubscription => {
        // Save to
        //console.log(pushSubscription.toJSON());
        const notification: UserNotification = Object.assign(
          pushSubscription.toJSON()
        );

        notification.uuid = uuid;
        notification.userId = this.user._id;
        this.user.notifications.push(notification);

        this.subs$.add(
          this._userService
            .addNotification(this.user._id, this.user.notifications)
            .subscribe(
              item => {
                if (item) {
                  //TODO: Add update to user store HERE
                  //this._store.dispatch(new actions.AuthUserChange(this.user));
                } else {
                  //Do Nothing
                }
              },
              err => {
                this._activityLogService.addError(err);
              },
              () => {
                // Clean up
              }
            )
        );
      })
      .catch(error => {
        // Do Nothing
      });
  }

  private displayErrors(errors: string[]): void {
    // event.errors.join('<br>').toString()
    const notificationService = new NotificationService();
    notificationService.bigBox({
      title: 'Oops!  There are some validation errors',
      content: errors.join('<br>').toString(),
      color: '#C46A69',
      icon: 'fa fa-warning shake animated',
      number: '1',
      timeout: 6000 // 6 seconds
    });
  }

  /**
   * Insert an item in the database
   */
  private insert() {
    this.wishlist.statusId = this.selectedStatus[0];
    this.subs$.add(
      this._wishlistService.insert(this.wishlist).subscribe(
        item => {
          if (item) {
            this._activityLogService.addInserts(
              `Inserted wishlist ${item._id}`
            );
            this._notificationService.smallBox({
              title: 'wishlist created',
              content: 'wishlist has been created successfully. ',
              color: '#739E73',
              timeout: 2000,
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });
            this.isUpdate = true;
            this.wishlist = item;
          } else {
            this._activityLogService.addError(
              'wishlist not returned from database on insert'
            );
            this._notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'wishlist was not returned indicating that wishlist was not in fact updated',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 3000, // 6 seconds
              sound: false
            });
          }
        },
        errInfo => {
          this._activityLogService.addError(errInfo);
          this._notificationService.bigBox({
            title: 'Oops!  there is an issue with the call to create',
            content: errInfo.error.message || errInfo.message,
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 3000 // 6 seconds
          });
        },
        () => {
          // Clean up
        }
      )
    );
  }

  /**
   * Update item
   */
  private update() {
    //this.wishlist.statusId = this.selectedStatus[0];
    if (this.isDeleted) {
      this.wishlist.statusId = 'deleted'
    }
    
    this.subs$.add(
      this._wishlistService.update(this.wishlist).subscribe(
        item => {
          if (item) {
            this._activityLogService.addUpdate(`Updated wishlist ${item._id}`);
            this._notificationService.smallBox({
              title: 'Wishlist Updated',
              content: 'Wishlist has been updated successfully. ',
              color: '#739E73',
              timeout: 2000,
              icon: 'fa fa-check',
              number: '4',
              sound: false
            });

            if (this.isDeleted) {
              this._router.navigate(['/home/landing']);
            }
          } else {
            this._activityLogService.addError(
              'No wishlist present: Update Failed'
            );
            this._notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'No wishlist returned which means that wishlist was not updated',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 3000, // 6 seconds
              sound: false
            });
          }
        },
        err => {
          this._activityLogService.addError(err);
          this._notificationService.bigBox({
            title: 'Oops!  there is an issue with the call to update',
            content: err,
            color: '#C46A69',
            icon: 'fa fa-warning shake animated',
            number: '1',
            timeout: 3000 // 6 seconds
          });
        },
        () => {
          // Clean up
        }
      )
    );
  }

  /**
   * Validate the item
   */
  private validate(): boolean {
    return this._factory.validate(this.wishlist, this.displayErrors);
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
