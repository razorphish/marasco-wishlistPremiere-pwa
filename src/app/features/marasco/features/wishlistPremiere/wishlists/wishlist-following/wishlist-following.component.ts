import { WishlistFollow } from './../../../../core/interfaces/Wishlist-Follow.interface';
import { WishlistFollowService } from './../../../../core/services/wishlist-follow.service';
import {
  Component,
  OnInit,
  TemplateRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import * as fromAuth from '@app/features/marasco/core/store/auth';
import * as moment from 'moment';
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { LayoutService } from '@app/features/marasco/core/services';
import { SubSink } from 'subsink';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

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
  private subs$ = new SubSink();
  //////////////END Private variables //////////

  //////////////////Publicly exposed variables///////////

  public defaultWishlists: WishlistFollow[] = [];

  public isMobile = true;

  public options: {};

  public pageIdSubscription: any;

  public user: User;

  public wishlistFollowings: WishlistFollow[] = this.defaultWishlists;

  @ViewChild('wishlistFollowModal')
  private wishlistFollowModal: TemplateRef<any>;

  bsModalRef: BsModalRef;

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _route: ActivatedRoute,
    private _store: Store<fromWishlist.WishlistState>,
    private _layoutService: LayoutService,
    private _router: Router,
    private _modalService: BsModalService,
    private _wishlistFollowService: WishlistFollowService
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.subs$.add(
      (this.pageIdSubscription = this._route.params.subscribe((params) => {
        let t = this._route.snapshot.data['wishlists'];
        this.wishlistFollowings = this._route.snapshot.data['wishlists'];
      }))
    );

    this.subs$.add(
      this._wishlistFollowService.onWishlistFollowChanged.subscribe(
        (follow) => {
          this.updateWishlistFollow(follow);
        }
      )
    );

    this.subs$.add(
      this._wishlistFollowService.onWishlistFollowDeleted.subscribe(
        (follow) => {
          this.deleteWishlistFollow(follow);
        }
      )
    );

    this.activate();
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public closeModal() {
    this.bsModalRef.hide();
  }

  public onModalClose() {
    this.bsModalRef.hide();
  }

  public openModal(wishlistFollow: any) {
    const initialState = {
      wishlist: {
        _id: wishlistFollow.wishlistId._id,
        name: wishlistFollow.wishlistId.name
      },
      wishlistFollow: wishlistFollow || {
        name: '',
        purchased: false
      }
    };

    this.bsModalRef = this._modalService.show(this.wishlistFollowModal, {
      initialState
    });
  }

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

  /**
   * @description Activates the Data Table for followings
   * @author Antonio Marasco
   * @date 2019-05-14
   * @private
   * @memberof WishlistFollowingComponent
   */
  private activateDataTable() {
    const that = this;
    this.options = {
      dom: 'Bfrtip',
      data: this.wishlistFollowings,
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
          self.openModal(data);
          //self.previewWishlist(row, data);
        });
        return row;
      }
    };
  }

  /**
   * @description Activates the state for the current page
   * @author Antonio Marasco
   * @date 2019-05-14
   * @private
   * @memberof WishlistFollowingComponent
   */
  private activateState() {
    const currentState = this._store.pipe(select(fromAuth.getUser));

    this.subs$.add(
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
   * @description Subscribes to unfollow event and redraws table
   * @author Antonio Marasco
   * @date 2019-05-29
   * @private
   * @param {WishlistFollow} follow
   * @returns void
   * @memberof WishlistFollowingComponent
   */
  private deleteWishlistFollow(follow: WishlistFollow) {
    if (!follow) {
      return;
    }

    let foundIndex: number = this.wishlistFollowings.findIndex(
      (x) => x._id === follow._id
    );

    if (foundIndex > -1) {
      this.wishlistFollowings.splice(foundIndex, 1);
    }

    let dt = jQuery('#wishlistFollowingDataTable').DataTable();
    dt.clear().draw();
    dt.rows.add(this.wishlistFollowings);
    dt.draw();
    //dt.columns.adjust().draw();
  }

  /**
   * @description Subscribes to wishlist update event and redraws table
   * @author Antonio Marasco
   * @date 2019-05-29
   * @private
   * @param {WishlistFollow} follow
   * @returns
   * @memberof WishlistFollowingComponent
   */
  private updateWishlistFollow(follow: WishlistFollow) {
    if (!follow) {
      return;
    }

    let foundWishlistFollowing = this.wishlistFollowings.find(
      (wishlistFollow) => {
        return wishlistFollow._id === follow._id;
      }
    );

    let foundIndex: number = this.wishlistFollowings.findIndex(
      (x) => x._id === follow._id
    );

    this.wishlistFollowings[foundIndex] = foundWishlistFollowing;

    let dt = jQuery('#wishlistFollowingDataTable').DataTable();
    dt.clear().draw();
    dt.rows.add(this.wishlistFollowings);
    dt.draw();
    //dt.columns.adjust().draw();
  }

  ngOnDestroy() {
    this.subs$.unsubscribe();
  }
}
