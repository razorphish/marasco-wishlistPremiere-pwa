import { WishlistsRestore } from './../store/wishlist/wishlist.actions';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { WishlistState } from '../store/wishlist/wishlist.reducer';

import { environment } from '../../../../../environments/environment';

import { Wishlist } from '../interfaces/Wishlist.interface';
import { StorageService } from './storage.service';
import { WishlistItem } from '../interfaces/Wishlist-item.interface';
import { WishlistFollow } from '../interfaces/Wishlist-Follow.interface';

const USER_WISHLISTS = 'user_wishlists';

@Injectable()
export class WishlistStateService {
  private _wishlistSource: Wishlist[];

  private _wishlistsSubject = new BehaviorSubject<Wishlist[]>(
    this._wishlistSource
  );

  public onWishlistsLoad = new BehaviorSubject<Wishlist[]>(
    this._wishlistSource
  );

  public wishlists$ = this._wishlistsSubject.asObservable();

  constructor(
    private _storage: StorageService,
    private _store: Store<WishlistState>
  ) {}

  add(wishlist: Wishlist) {
    this.wishlists.push(wishlist);

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  addItem(wishlistItem: WishlistItem) {
    var foundWishlist = this.wishlists.find((wishlist) => {
      return wishlist._id === wishlistItem.wishlistId;
    });

    let foundIndex: number = this.wishlists.findIndex(
      (x) => x._id === wishlistItem.wishlistId
    );

    //Add item
    if (foundWishlist.items) {
      foundWishlist.items.push(wishlistItem);
    } else {
      foundWishlist.items = [wishlistItem];
    }

    this.wishlists[foundIndex] = foundWishlist;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  delete(wishlist: Wishlist) {
    //TODO
    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  deleteItem(wishlistItem: WishlistItem) {
    let foundWishlist = this.wishlists.find((wishlist) => {
      return wishlist._id === wishlistItem.wishlistId;
    });

    let foundIndex: number = this.wishlists.findIndex(
      (x) => x._id === wishlistItem.wishlistId
    );

    //find item
    let foundItemIndex: number = foundWishlist.items.findIndex(
      (x) => x._id === wishlistItem._id
    );

    foundWishlist.items.splice(foundItemIndex, 1);

    this.wishlists[foundIndex] = foundWishlist;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  edit(wishlist: Wishlist) {
    let foundIndex: number = this.wishlists.findIndex(
      (x) => x._id === wishlist._id
    );

    this.wishlists[foundIndex] = wishlist;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  editItem(wishlistItem: WishlistItem) {
    let foundWishlist = this.wishlists.find((wishlist) => {
      return wishlist._id === wishlistItem.wishlistId;
    });

    let foundIndex: number = this.wishlists.findIndex(
      (x) => x._id === wishlistItem.wishlistId
    );

    //find item index
    let foundItemIndex: number = foundWishlist.items.findIndex(
      (x) => x._id === wishlistItem._id
    );

    foundWishlist.items[foundItemIndex] = wishlistItem;

    this.wishlists[foundIndex] = foundWishlist;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._storage.get(USER_WISHLISTS).then(
        (wishlists) => {
          environment.log.wishlist &&
            console.log(
              (!!wishlists ? 'wishlists exists' : 'wishlist does not exist') +
                ' at boot'
            );

          if (!!wishlists) {
            try {
              this._store.dispatch(new WishlistsRestore(wishlists));
            } catch (error) {
              wishlists = null;
            }
          }

          this.wishlists = wishlists;

          this.wishlists$
            .pipe(switchMap(this.dumpWishlists))
            .subscribe(() => {});

          resolve(wishlists);
        },
        (error) => {
          resolve(null);
        }
      );
    });
  }

  sortItem(wishlistItems: WishlistItem[]) {
    //Get wishlist Id
    const wishlistId = wishlistItems[0].wishlistId;

    var foundWishlist = this.wishlists.find((wishlist) => {
      return wishlist._id === wishlistId;
    });

    let foundIndex: number = this.wishlists.findIndex(
      (x) => x._id === wishlistId
    );

    foundWishlist.items = wishlistItems;

    this.wishlists[foundIndex] = foundWishlist;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  set wishlists(value: Wishlist[]) {
    this._wishlistsSubject.next(value);
  }

  get wishlists(): Wishlist[] {
    return this._wishlistsSubject.value;
  }

  sync(wishlists: Wishlist[]) {
    this.wishlists = wishlists;

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/

  dumpWishlists = (wishlists) => {
    environment.log.wishlist &&
      console.log('\n\n\n================\ndump wishlists', wishlists);
    return !!wishlists
      ? this._storage.set(USER_WISHLISTS, wishlists)
      : this._storage.remove(USER_WISHLISTS).then(() => null);
  };
}

export function WishlistStateServiceFactory(
  service: WishlistStateService
): Function {
  return () => service.load();
}
