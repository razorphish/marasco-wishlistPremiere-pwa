import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistFollow } from '../interfaces/Wishlist-Follow.interface';

@Injectable()
export class WishlistFollowService {
  private _url: string = `${environment.apiUrl}wishlist`;

  private _WishlistFollowSource: WishlistFollow;
  private _WishlistFollowsSource: WishlistFollow[];

  public onWishlistFollowChanged = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
  );

  public onWishlistFollowCreated = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
  );

  public onWishlistFollowDeleted = new BehaviorSubject<WishlistFollow>(
    this._WishlistFollowSource
  );

  constructor(private _authHttp: AuthHttpService) {}

  byWishlistId(wishlistId: string): Observable<WishlistFollow[]> {
    return this._authHttp.get(`${this._url}/${wishlistId}/follow`).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

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

  insert(WishlistFollow: WishlistFollow): Observable<WishlistFollow> {
    return this._authHttp
      .post(
        `${this._url}/${WishlistFollow.wishlistId}/follow`,
        JSON.stringify(WishlistFollow)
      )
      .pipe(
        map((WishlistFollow: WishlistFollow) => {
          this.onWishlistFollowCreated.next(WishlistFollow);
          return WishlistFollow;
        }),
        catchError(this.handleError)
      );
  }

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

  /**
   * Handles the error
   * @param error : Error
   */
  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
