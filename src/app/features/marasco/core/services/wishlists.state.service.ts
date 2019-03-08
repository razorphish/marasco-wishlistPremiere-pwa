import { WishlistsRestore } from './../store/wishlist/wishlist.actions';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { WishlistState } from '../store/wishlist/wishlist.reducer';

import { environment } from '../../../../../environments/environment';

import { Wishlist } from '../interfaces/Wishlist.interface';
import { StorageService } from './storage.service';

const USER_WISHLISTS = 'wishlists';

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

  add(wishlist: Wishlist){
    this.wishlists.push(wishlist);

    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._storage.get(USER_WISHLISTS).then(
        (wishlists) => {
          environment.log.wishlist &&
            console.log((!!wishlists ? 'wishlists exists' : 'wishlist does not exist') + ' at boot');

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

  set wishlists(value: Wishlist[]) {
    this._wishlistsSubject.next(value);
  }

  get wishlists(): Wishlist[] {
    return this._wishlistsSubject.value;
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
