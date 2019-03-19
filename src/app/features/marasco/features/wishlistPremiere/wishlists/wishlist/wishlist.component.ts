import { Observable, Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
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
import * as fromAuth from '@app/features/marasco/core/store/auth';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'marasco-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {
  //////////////////Private variables///////////
  private unsubscribe$ = new Subject<void>();
  private unsubscribe2$ = new Subject<void>();
  private unsubscribe3$ = new Subject<void>();
  private unsubscribe4$ = new Subject<void>();
  //\\\END Private variables ////////

  //////////////////Publicly exposed variables///////////
  public demo3: any;

  public nestable3DemoOutput: any;

  public defaultWishlist: Wishlist = {
    name: '',
    userId: '',
    preferences: {
      includePriceWhenSharing: true,
      markPurchasedItem: false,
      hideFromMe: false,
      currencyUnitSymbol: '$'
    }
  };

  public dropdownSettingsStatus = {};

  public isUpdate = true;

  public options = [];
  public optionsNotificationTable: any = {};
  public optionsTokenTable: any = {};

  public selectedStatus = [];
  public state: any = {
    tabs: {
      demo1: 0
    }
  };
  public statusOptions = [
    {
      _id: 'active',
      name: 'active'
    },
    {
      _id: 'inactive',
      name: 'inactive'
    },
    {
      _id: 'disabled',
      name: 'disabled'
    },
    {
      _id: 'pending',
      name: 'pending'
    },
    {
      _id: 'archived',
      name: 'archived'
    },
    {
      _id: 'suspended',
      name: 'suspended'
    },
    {
      _id: 'deleted',
      name: 'deleted'
    }
  ];

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

  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string>;

  public wishlist: Wishlist = this.defaultWishlist;

  // @Input() filter = 'ion ([7-9]|[1][0-2])';
  @Input() filter = '';

  @ViewChild('wishlistDetailsForm') wishlistDetailsForm;

  bsModalRef: BsModalRef;

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _wishlistService: WishlistService,
    private _route: ActivatedRoute,
    private _notificationService: NotificationService,
    private _router: Router,
    private _factory: WishlistFactory,
    private _activityLogService: ActivityLogSubjectService,
    private _store: Store<fromAuth.AuthState>,
    private _modalService: BsModalService,
    private _storage: AngularFireStorage
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    if (id !== '0') {
      this.wishlist = this._route.snapshot.data['wishlist'];
      this.selectedStatus.push(this.wishlist.statusId);
    } else {
      this.isUpdate = false;
    }

    this.demo3 = [
      {
        id: 100,
        content: ' Drag 100 '
      },
      {
        id: 101,
        content: ' Drag 101 '
      },
      {
        id: 102,
        content: ' Drag 102 '
      },
      {
        id: 105,
        content: ' Drag 105 '
      }
    ];

    this.activate();
  }

  onItemSelect(item: any) {
    // Clear out current wishlist roles
    //console.log(item);
  }

  onSelectAll(items: any) {
    //console.log(items);
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this._modalService.show(template);
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public addItem() {
    this.bsModalRef.hide();
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

  public onChange3(payload){
    this.nestable3DemoOutput = payload;
  }

  public uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'name-your-file-path-here';
    const fileRef = this._storage.ref(filePath);
    const task = this._storage.upload(filePath, file, { customMetadata: {} });

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();

    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(
        takeUntil(this.unsubscribe4$),
        finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();
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
    this._wishlistService.insert(this.wishlist)
    .pipe(takeUntil(this.unsubscribe3$))
    .subscribe(
      (item) => {
        if (item) {
          this._activityLogService.addInserts(`Inserted wishlist ${item._id}`);
          this._notificationService.smallBox({
            title: 'wishlist created',
            content: 'wishlist has been created successfully. ',
            color: '#739E73',
            timeout: 4000,
            icon: 'fa fa-check',
            number: '4'
          });
          this.isUpdate = true;
          this.wishlist._id = item._id;
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
            timeout: 6000 // 6 seconds
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
          timeout: 6000 // 6 seconds
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
              timeout: 4000,
              icon: 'fa fa-check',
              number: '4'
            });
          } else {
            this._activityLogService.addError(
              'No wishlist present: Update Faile'
            );
            this._notificationService.bigBox({
              title: 'Oops! the database has returned an error',
              content:
                'No wishlist returned which means that wishlist was not updated',
              color: '#C46A69',
              icon: 'fa fa-warning shake animated',
              number: '1',
              timeout: 6000 // 6 seconds
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
            timeout: 6000 // 6 seconds
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
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe2$.next();
    this.unsubscribe2$.complete();
    this.unsubscribe3$.next();
    this.unsubscribe3$.complete();
    this.unsubscribe4$.next();
    this.unsubscribe4$.complete();
  }
}
