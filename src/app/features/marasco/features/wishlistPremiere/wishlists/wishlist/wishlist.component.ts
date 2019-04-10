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
import { User } from '@app/features/marasco/core/interfaces/UserInfo.interface';
import { WishlistItem } from '@app/features/marasco/core/interfaces/Wishlist-item.interface';
import { LayoutService } from '@app/features/marasco/core/services';
import { Lightbox, IAlbum } from 'ngx-lightbox';

/**
 * https://jonathannicol.com/blog/2014/06/16/centre-crop-thumbnails-with-css/
 */
@Component({
  selector: 'marasco-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {
  //////////////////Private variables///////////
  private _albums: IAlbum[] = [];
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

  public isMobile = true;

  public pageIdSubscription: any;

  public state: any = {
    tabs: {
      demo1: 0
    }
  };

  public user: User;

  public wishlist: Wishlist = this.defaultWishlist;

  bsModalRef: BsModalRef;

  //////////////////END Publicly exposed variables///////////

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _store: Store<fromWishlist.WishlistState>,
    private _modalService: BsModalService,
    private _layoutService: LayoutService,
    private _lightbox: Lightbox
  ) {}

  /////////////////////////////////////
  // Events
  /////////////////////////////////////

  ngOnInit() {
    this.pageIdSubscription = this._route.params
      .pipe(takeUntil(this.pageIdUnsubscribe$))
      .subscribe((params) => {
        this.wishlist = this._route.snapshot.data['wishlist'];
        if (!this.wishlist) {
          this._router.navigateByUrl('/wishlistPremiere/wishlists/following');
        }
      });

    this.activate();
  }

  /////////////////////////////////////
  // Public Methods
  /////////////////////////////////////

  public close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  public closeModal() {
    this.bsModalRef.hide();
  }

  public markItemPurchase($event, item: WishlistItem) {
    item.purchased = !item.purchased;
    item.purchasedBy = this.user._id;

    if (!item.purchased) {
      item.purchasedBy = null;
    }

    this._store.dispatch(new fromWishlist.EditWishlistItemAction(item));
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

  public open(index: number) {
    this._lightbox.open(this._albums, index);
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

    //Set album
    this.wishlist.items.forEach((item, index) => {
      const album = {
        thumb: item.image || 'assets/icons/icon-72x72_grey_out.png',
        src: item.image || 'assets/icons/icon-384x384.png',
        caption: `${item.name} : $${item.price}`
      };

      this._albums.push(album);
    });
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
