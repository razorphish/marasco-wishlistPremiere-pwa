import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Wishlist } from '../../../../core/interfaces/Wishlist.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import * as moment from 'moment';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { LayoutService } from '@app/features/marasco/core/services';

/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 */
@Component({
  selector: 'marasco-user-wishlist-follows',
  templateUrl: 'wishlist-following.component.html',
  styleUrls: ['./wishlist-following.component.css']
})
export class WishlistFollowingComponent implements OnInit, OnDestroy {
  //////////////////Private variables///////////
  private pageIdUnsubscribe$ = new Subject<void>();
  private unsubscribe$ = new Subject<void>();
  private unsubscribe2$ = new Subject<void>();
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

  public defaultWishlists: Wishlist[] = [];

  public isMobile = true;

  public options: {};

  public pageIdSubscription: any;

  public user: User;

  public wishlists: Wishlist[] = this.defaultWishlists;

  bsModalRef: BsModalRef;

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService,
    private _layoutService: LayoutService,
    private _router: Router
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.pageIdSubscription = this._route.params
      .pipe(takeUntil(this.pageIdUnsubscribe$))
      .subscribe((params) => {
        this.wishlists = this._route.snapshot.data['wishlists'];
      });

    this.activate();
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public close(): void {
    // close lightbox programmatically
  }

  public closeModal() {
    this.bsModalRef.hide();
  }

  public openModal(event, template: TemplateRef<any>, wishlist: Wishlist) {
    const initialState = {
      wishlist: wishlist || {
        name: '',
        purchased: false
      }
    };

    event.preventDefault();
    this.bsModalRef = this._modalService.show(template, { initialState });
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public previewWishlist(row: any, wishlist: any) {
    this._router.navigateByUrl(`wishlistPremiere/wishlists/${wishlist.wishlistId._id}`);
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

    this.activateDataTable();
  }

  private activateDataTable() {
    const that = this;
    this.options = {
      dom: 'Bfrtip',
      data: this.wishlists,
      columns: [
        {
          data: 'wishlistId.name',
          title: 'Name',
          defaultContent: '<i>Not Set</i>'
        },
        {
          data: 'dateCreated',
          render: (data, type, row, meta) => {
            return moment(data).format('LLL');
          },
          title: 'Since'
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        jQuery('td', row).unbind('click');
        jQuery('td', row).bind('click', () => {
          //self.openModal(data, {}, {});
          self.previewWishlist(row, data);
        });
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
  }

  /**
   * Validate the item
   */

  ngOnDestroy() {
    this.pageIdUnsubscribe$.next();
    this.pageIdUnsubscribe$.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.unsubscribe2$.next();
    this.unsubscribe2$.complete();
  }
}
