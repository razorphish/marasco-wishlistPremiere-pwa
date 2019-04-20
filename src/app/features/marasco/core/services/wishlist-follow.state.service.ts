import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { StorageService } from './storage.service';

import { WishlistState } from '../store/wishlist/wishlist.reducer';
import { WishlistFollow } from '../interfaces/Wishlist-Follow.interface';
import { WishlistFollowRestore } from '../store/wishlist/wishlist.actions';

const USER_WISHLIST_FOLLOWS = 'user_wishlist_follows';

@Injectable()
export class WishlistFollowStateService {
  private _wishlistFollowsSource: WishlistFollow[];

  private _wishlistFollowSubject = new BehaviorSubject<WishlistFollow[]>(
    this._wishlistFollowsSource
  );

  public onWishlistFollowsLoad = new BehaviorSubject<WishlistFollow[]>(
    this._wishlistFollowsSource
  );

  public wishlistFollows$ = this._wishlistFollowSubject.asObservable();

  constructor(
    private _storage: StorageService,
    private _store: Store<WishlistState>
  ) {}

  /**
   * @description Adds a follow to the wishlist
   * @author Antonio Marasco
   * @date 2019-04-20
   * @param {WishlistFollow} wishlistFollow
   * @returns
   * @memberof WishlistFollowStateService
   */
  add(wishlistFollow: WishlistFollow) {
    this.wishlistFollows.push(wishlistFollow);

    return new Promise((resolve) => {
      resolve(this.wishlistFollows);
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._storage.get(USER_WISHLIST_FOLLOWS).then(
        (wishlistFollows) => {
          environment.log.wishlist &&
            console.log(
              (!!wishlistFollows
                ? 'User wishlist follows exist'
                : 'User wishlist follows do not exist') + ' at boot'
            );

          if (!!wishlistFollows) {
            try {
              this._store.dispatch(new WishlistFollowRestore(wishlistFollows));
            } catch (error) {
              wishlistFollows = null;
            }
          }

          this.wishlistFollows = wishlistFollows;

          this.wishlistFollows$
            .pipe(switchMap(this.dumpWishlistFollows))
            .subscribe(() => {});

          resolve(wishlistFollows);
        },
        (error) => {
          resolve(null);
        }
      );
    });
  }

  /**
   *
   *
   * @memberof WishlistFollowStateService
   */
  set wishlistFollows(value: WishlistFollow[]) {
    this._wishlistFollowSubject.next(value);
  }

  get wishlistFollows(): WishlistFollow[] {
    return this._wishlistFollowSubject.value;
  }

  /*///////////////////////////////////////////////
  /* Private Methods/Members
  //////////////////////////////////////////////*/

  /**
   *Dump wishlist property
   *
   * @memberof WishlistFollowStateService
   */
  dumpWishlistFollows = (wishlistFollows) => {
    environment.log.wishlist &&
      console.log(
        '\n\n\n================\ndump user wishlist follows',
        wishlistFollows
      );

    return !!wishlistFollows
      ? this._storage.set(USER_WISHLIST_FOLLOWS, wishlistFollows)
      : this._storage.remove(USER_WISHLIST_FOLLOWS).then(() => null);
  };
}

export function WishlistFollowStateServiceFactory(
  service: WishlistFollowStateService
): Function {
  return () => service.load();
}
