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

  private _WishlistFollowSource: WishlistFollow;

  public onWishlistFollowChanged = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
  );

  public onWishlistFollowCreated = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
  );

  public onWishlistFollowDeleted = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
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
   * @param {WishlistFollow} WishlistFollow
   * @returns {Observable<any>}
   * @memberof WishlistFollowService
   */
  delete(WishlistFollow: WishlistFollow): Observable<any> {
    return this._authHttp
      .delete(
        `${this._url}/${WishlistFollow.wishlistId}/item/${WishlistFollow._id}`,
        JSON.stringify(WishlistFollow)
      )
      .pipe(
        map((result: any) => {
          this.onWishlistFollowDeleted.next(WishlistFollow);
          return result;
        }),
        catchError(this.handleError)
      );
  }
  /**
   * @description Inserts a follow into the wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistFollow} WishlistFollow
   * @param {boolean} isCurrentUser
   * @returns {Observable<WishlistFollow>}
   * @memberof WishlistFollowService
   */
  insert(
    WishlistFollow: WishlistFollow,
    isCurrentUser: boolean
  ): Observable<WishlistFollow> {
    return this._authHttp
      .post(
        `${this._url}/${WishlistFollow.wishlistId}/follow`,
        JSON.stringify(WishlistFollow)
      )
      .pipe(
        map((WishlistFollow: WishlistFollow) => {
          if (isCurrentUser) {
            this.onWishlistFollowCreated.next(WishlistFollow);
          }
          return WishlistFollow;
        }),
        catchError(this.handleError)
      );
  }
  /**
   * @description Updates follow (mainly settings) of a wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistFollow} WishlistFollow
   * @returns {Observable<WishlistFollow>}
   * @memberof WishlistFollowService
   */
  update(WishlistFollow: WishlistFollow): Observable<WishlistFollow> {
    return this._authHttp
      .put(
        `${this._url}/${WishlistFollow.wishlistId}/item/${WishlistFollow._id}`,
        JSON.stringify(WishlistFollow)
      )
      .pipe(
        map((WishlistFollow: WishlistFollow) => {
          this.onWishlistFollowChanged.next(WishlistFollow);
          return WishlistFollow;
        }),
        catchError(this.handleError)
      );
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/
}
