import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Wishlist } from '../../../../core/interfaces/Wishlist.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import * as moment from 'moment';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { LayoutService } from '@app/features/marasco/core/services';
import { SubSink } from 'subsink';

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
  private subs = new SubSink();
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

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<fromWishlist.WishlistState>,
    private _layoutService: LayoutService,
    private _router: Router
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.subs.add(
      (this.pageIdSubscription = this._route.params.subscribe((params) => {
        this.wishlists = this._route.snapshot.data['wishlists'];
      }))
    );

    this.activate();
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public previewWishlist(row: any, wishlist: any) {
    this._router.navigateByUrl(
      `wishlistPremiere/wishlists/${wishlist.wishlistId._id}`
    );
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
    const currentState = this._store.pipe(select(fromAuth.getUser));

    this.subs.add(
      currentState.subscribe((data) => {
        if (!!data) {
          this.user = data.user;
        }
      })
    );

    //Sets mobile
    this.isMobile = this._layoutService.store.isMobile;
  }

  /**
   * Validate the item
   */

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
