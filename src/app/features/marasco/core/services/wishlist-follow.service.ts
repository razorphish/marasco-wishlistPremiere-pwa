import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistFollow } from '../interfaces/Wishlist-Follow.interface';
import { MarascoService } from './MarascoService';

@Injectable()
export class WishlistFollowService extends MarascoService {
  private _url: string = `${environment.apiUrl}wishlist`;

  private _wishlistFollowSource: WishlistFollow;

  public onWishlistFollowChanged = new BehaviorSubject<WishlistFollow>(
    this._wishlistFollowSource
  );

  public onWishlistFollowCreated = new BehaviorSubject<WishlistFollow>(
    this._wishlistFollowSource
  );

  public onWishlistFollowDeleted = new BehaviorSubject<WishlistFollow>(
    this._wishlistFollowSource
  );

  constructor(private _authHttp: AuthHttpService) {
    super();
  }

  /**
   * @description Get follows by wishlist Id
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} wishlistId
   * @returns {Observable<WishlistFollow[]>}
   * @memberof WishlistFollowService
   */
  byWishlistId(wishlistId: string): Observable<WishlistFollow[]> {
    return this._authHttp.get(`${this._url}/${wishlistId}/follow`).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  /**
   * @description Removes follow from wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistFollow} wishlistFollow
   * @returns {Observable<any>}
   * @memberof WishlistFollowService
   */
  delete(wishlistFollow: WishlistFollow): Observable<any> {
    return this._authHttp
      .delete(
        `${this._url}/${wishlistFollow.wishlistId}/item/${wishlistFollow._id}`,
        JSON.stringify(wishlistFollow)
      )
      .pipe(
        map((result: any) => {
          this.onWishlistFollowDeleted.next(wishlistFollow);
          return result;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * @description Inserts a follow into the wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistFollow} wishlistFollow
   * @param {boolean} isCurrentUser
   * @returns {Observable<WishlistFollow>}
   * @memberof WishlistFollowService
   */
  insert(wishlistFollow: WishlistFollow): Observable<WishlistFollow> {
    return this._authHttp
      .post(
        `${this._url}/${wishlistFollow.wishlistId}/follow`,
        JSON.stringify(wishlistFollow)
      )
      .pipe(
        map((result: WishlistFollow) => {
          result.wishlist = wishlistFollow.wishlist;
          this.onWishlistFollowCreated.next(result);
          return result;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * @description Inserts or Updates Wishlist follow
   * @author Antonio Marasco
   * @date 2019-05-16
   * @param {WishlistFollow} wishlistFollow
   * @memberof WishlistFollowService
   */
  save(wishlistFollow: WishlistFollow) {
    if (!!wishlistFollow._id) {
      return this.update(wishlistFollow);
    }

    return this.insert(wishlistFollow);
  }

  /**
   * @description Updates follow (mainly settings) of a wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistFollow} wishlistFollow
   * @returns {Observable<WishlistFollow>}
   * @memberof WishlistFollowService
   */
  update(wishlistFollow: WishlistFollow): Observable<WishlistFollow> {
    return this._authHttp
      .put(
        `${this._url}/${wishlistFollow.wishlistId}/follow/${wishlistFollow._id}`,
        JSON.stringify(wishlistFollow)
      )
      .pipe(
        map((result: WishlistFollow) => {
          result.wishlist = wishlistFollow.wishlist;
          this.onWishlistFollowChanged.next(result);
          return result;
        }),
        catchError(this.handleError)
      );
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/
}
