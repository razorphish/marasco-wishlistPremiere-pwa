import { WishlistItemSort } from '../../../../core/interfaces/Wishlist-item-sort.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

import * as moment from 'moment';

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
  private pageIdUnsubscribe$ = new Subject<void>();
  private unsubscribe$ = new Subject<void>();
  private unsubscribe2$ = new Subject<void>();
  private unsubscribe3$ = new Subject<void>();
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
      notifyOnAddItem: false,
      notifyOnRemoveItem: false,
      notifyOnClose: false
    },
    items: []
  };

  public dropdownSettingsStatus = {};

  public isMobile = true;
  public isUpdate = true;

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

  public pageIdSubscription: any;
  public options = [];
  public optionsNotificationTable: any = {};
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
    private _layoutService: LayoutService
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.pageIdSubscription = this._route.params
      .pipe(takeUntil(this.pageIdUnsubscribe$))
      .subscribe((params) => {
        const id = params['id'];
        if (id !== '0') {
          this.wishlist = this._route.snapshot.data['wishlist'];
          this.selectedStatus.push(this.wishlist.statusId);
          this.isUpdate = true;
        } else {
          this.isUpdate = false;
        }
      });

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
        purchased: false
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

    this.dropdownSettingsStatus = {
      singleSelection: true,
      idField: '_id',
      textField: 'name'
    };

    this.optionsNotificationTable = {
      dom: 'Bfrtip',
      data: this.wishlist.notifications,
      columns: [
        { data: '_id', title: 'Id' },
        { data: 'endpoint', title: 'Endpoint' },
        {
          data: 'expirationTime',
          title: 'Expiration Time',
          defaultContent: '<i>Not Set</i>'
        },
        {
          data: 'keys',
          title: 'Keys',
          render: (data, type, row, meta) => {
            return `auth:${data.auth} p256dh:${data.p256dh}`;
          }
        },
        {
          data: 'dateCreated',
          render: (data, type, row, meta) => {
            return moment(data).format('LLL');
          }
        }
      ],
      buttons: ['copy', 'pdf', 'print'],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        // const self = this;
        // // Unbind first in order to avoid any duplicate handler
        // // (see https://github.com/l-lin/angular-datatables/issues/87)
        // jQuery('td', row).unbind('click');
        // jQuery('td', row).bind('click', () => {
        //   self.toDetails(data);
        // });
        return row;
      }
    };
  }

  private activateState() {
    const currentState = this._store.pipe(
      select(fromAuth.getUser),
      takeUntil(this.unsubscribe2$)
    );

    currentState.subscribe((data) => {
      if (!!data) {
        this.user = data.user;
      }
    });

    //Sets mobile
    this.isMobile = this._layoutService.store.isMobile;

    this._wishlistService.onWishlistChanged.subscribe((wishlist) => {
      if (!!wishlist && wishlist._id === this.wishlist._id) {
        this.wishlist = wishlist;
      }
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
    this._wishlistService
      .insert(this.wishlist)
      .pipe(takeUntil(this.unsubscribe3$))
      .subscribe(
        (item) => {
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
        (errInfo) => {
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
      );
  }

  /**
   * Update item
   */
  private update() {
    this.wishlist.statusId = this.selectedStatus[0];
    this._wishlistService
      .update(this.wishlist)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (item) => {
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
        (err) => {
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
      );
  }

  /**
   * Validate the item
   */
  private validate(): boolean {
    return this._factory.validate(this.wishlist, this.displayErrors);
  }

  ngOnDestroy() {
    this.pageIdUnsubscribe$.next();
    this.pageIdUnsubscribe$.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe2$.next();
    this.unsubscribe2$.complete();
    this.unsubscribe3$.next();
    this.unsubscribe3$.complete();
  }
}
