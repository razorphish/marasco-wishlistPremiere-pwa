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

  private _wishlistItemSource: WishlistItem;
  private _wishlistItemsSource: WishlistItem[];

  public onWishlistItemChanged = new BehaviorSubject<WishlistItem>(
    this._wishlistItemSource
  );

  public onWishlistItemCreated = new BehaviorSubject<WishlistItem>(
    this._wishlistItemSource
  );

  public onWishlistItemDeleted = new BehaviorSubject<WishlistItem>(
    this._wishlistItemSource
  );

  public onWishlistItemsSorted = new BehaviorSubject<WishlistItem[]>(
    this._wishlistItemsSource
  );

  constructor(private _authHttp: AuthHttpService) {}

  delete(wishlistItem: WishlistItem): Observable<any> {
    return this._authHttp
      .delete(
        `${this._url}/${wishlistItem.wishlistId}/item/${wishlistItem._id}`,
        JSON.stringify(wishlistItem)
      )
      .pipe(
        map((result: any) => {
          this.onWishlistItemDeleted.next(wishlistItem);
          return result;
        }),
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
        `${this._url}/${wishlistItemSort.wishlistId}/item/${
          wishlistItemSort.wishlistItemId
        }/sort`,
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

  update(wishlistItem: WishlistItem): Observable<WishlistItem> {
    return this._authHttp
      .put(
        `${this._url}/${wishlistItem.wishlistId}/item/${wishlistItem._id}`,
        JSON.stringify(wishlistItem)
      )
      .pipe(
        map((wishlistItem: WishlistItem) => {
          this.onWishlistItemChanged.next(wishlistItem);
          return wishlistItem;
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
