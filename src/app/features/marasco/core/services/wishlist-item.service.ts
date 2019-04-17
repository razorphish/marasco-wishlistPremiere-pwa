import { WishlistItemSort } from './../interfaces/Wishlist-item-sort.interface';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistItem } from '../interfaces/Wishlist-item.interface';
import { MarascoService } from './MarascoService';

@Injectable()
export class WishlistItemService extends MarascoService {
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

  constructor(private _authHttp: AuthHttpService) {
    super();
  }
  /**
   * @description Deletes an item from the wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItem} wishlistItem
   * @returns {Observable<any>}
   * @memberof WishlistItemService
   */
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

  /**
   * @description Creates and inserts and item into the wishlist item array
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItem} wishlistItem
   * @returns {Observable<WishlistItem>}
   * @memberof WishlistItemService
   */
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

  /**
   * @description Sorts wishlist items
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItemSort} wishlistItemSort
   * @returns {Observable<WishlistItem[]>}
   * @memberof WishlistItemService
   */
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

  /**
   * @description Updates an item from the wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItem} wishlistItem
   * @returns {Observable<WishlistItem>}
   * @memberof WishlistItemService
   */
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
}
