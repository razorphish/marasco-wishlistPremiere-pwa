import { WishlistItemSort } from './../interfaces/Wishlist-item-sort.interface';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistItem } from '../interfaces/Wishlist-item.interface';

@Injectable()
export class WishlistItemService {
  private _url: string = `${environment.apiUrl}wishlist`;

  private _wishlistSource: WishlistItem;
  private _wishlistItemsSource: WishlistItem[];

  public onWishlistItemChanged = new BehaviorSubject<WishlistItem>(
    this._wishlistSource
  );

  public onWishlistItemCreated = new BehaviorSubject<WishlistItem>(
    this._wishlistSource
  );

  public onWishlistItemsSorted = new BehaviorSubject<WishlistItem[]>(
    this._wishlistItemsSource
  );

  constructor(private _authHttp: AuthHttpService) {}

  all(): Observable<WishlistItem[]> {
    return this._authHttp.get(this._url).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  allDetails(): Observable<WishlistItem[]> {
    return this._authHttp.get(`${this._url}details`).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<any> {
    return this._authHttp.delete(`${this._url}${id}`).pipe(
      map((result: any) => result),
      catchError(this.handleError)
    );
  }

  get(id: string): Observable<WishlistItem> {
    return this._authHttp.get(`${this._url}${id}`).pipe(
      map((wishlistItem: any) => wishlistItem),
      catchError(this.handleError)
    );
  }

  getDetails(id: string): Observable<WishlistItem> {
    return this._authHttp.get(`${this._url}${id}/details`).pipe(
      map((wishlist: any) => wishlist),
      catchError(this.handleError)
    );
  }

  insert(wishlistItem: WishlistItem): Observable<WishlistItem> {
    return this._authHttp
      .post(
        `${this._url}/${wishlistItem.wishlistId}/item`,
        JSON.stringify(wishlistItem)
      )
      .pipe(
        map((wishlistItem: WishlistItem) => {
          this.onWishlistItemCreated.next(wishlistItem);
          return wishlistItem;
        }),
        catchError(this.handleError)
      );
  }

  sort(wishlistItemSort: WishlistItemSort): Observable<WishlistItem[]> {
    return this._authHttp
      .post(
        `${this._url}/${wishlistItemSort.wishlistId}/item/${wishlistItemSort.wishlistItemId}/sort`,
        JSON.stringify(wishlistItemSort)
      )
      .pipe(
        map((wishlistItems: WishlistItem[]) => {
          this.onWishlistItemsSorted.next(wishlistItems);
          return wishlistItems;
        }),
        catchError(this.handleError)
      );
  }

  update(wishlist: WishlistItem): Observable<WishlistItem> {
    return this._authHttp
      .put(`${this._url}${wishlist._id}`, JSON.stringify(wishlist))
      .pipe(
        map((wishlistItem: WishlistItem) => wishlistItem),
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
