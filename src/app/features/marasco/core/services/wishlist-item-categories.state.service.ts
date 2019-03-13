import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { StorageService } from './storage.service';

import { WishlistState } from '../store/wishlist/wishlist.reducer';
import { WishlistItemCategory } from '../interfaces/Wishlist-item-category.interface';
import { WishlistItemCategoriesRestore } from '../store/wishlist/wishlist.actions';

const USER_WISHLIST_ITEM_CATEGORIES = 'user_wishlist_item_categories';

@Injectable()
export class WishlistItemCategoriesStateService {
  private _wishlistItemCategoriesSource: WishlistItemCategory[];

  private _wishlistItemCategoriesSubject = new BehaviorSubject<
    WishlistItemCategory[]
  >(this._wishlistItemCategoriesSource);

  public onWishlistItemCategoriesLoad = new BehaviorSubject<
    WishlistItemCategory[]
  >(this._wishlistItemCategoriesSource);

  public wishlistItemCategories$ = this._wishlistItemCategoriesSubject.asObservable();

  constructor(
    private _storage: StorageService,
    private _store: Store<WishlistState>
  ) {}

  add(wishlistItemCategory: WishlistItemCategory) {
    this.wishlistItemCategories.push(wishlistItemCategory);

    return new Promise((resolve) => {
      resolve(this.wishlistItemCategories);
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._storage.get(USER_WISHLIST_ITEM_CATEGORIES).then(
        (wishlistItemCategories) => {
          environment.log.wishlist &&
            console.log(
              (!!wishlistItemCategories
                ? 'wishlist categories exist'
                : 'wishlist categories do not exist') + ' at boot'
            );

          if (!!wishlistItemCategories) {
            try {
              this._store.dispatch(
                new WishlistItemCategoriesRestore(wishlistItemCategories)
              );
            } catch (error) {
              wishlistItemCategories = null;
            }
          }

          this.wishlistItemCategories = wishlistItemCategories;

          this.wishlistItemCategories$
            .pipe(switchMap(this.dumpWishlistItemCategories))
            .subscribe(() => {});

          resolve(wishlistItemCategories);
        },
        (error) => {
          resolve(null);
        }
      );
    });
  }

  set wishlistItemCategories(value: WishlistItemCategory[]) {
    this._wishlistItemCategoriesSubject.next(value);
  }

  get wishlistItemCategories(): WishlistItemCategory[] {
    return this._wishlistItemCategoriesSubject.value;
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/

  dumpWishlistItemCategories = (wishlistItemCategories) => {
    environment.log.wishlist &&
      console.log(
        '\n\n\n================\ndump wishlist categories',
        wishlistItemCategories
      );
      
    return !!wishlistItemCategories
      ? this._storage.set(USER_WISHLIST_ITEM_CATEGORIES, wishlistItemCategories)
      : this._storage.remove(USER_WISHLIST_ITEM_CATEGORIES).then(() => null);
  };
}

export function WishlistItemCategoriesStateServiceFactory(
  service: WishlistItemCategoriesStateService
): Function {
  return () => service.load();
}
