import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistItemCategory } from './../interfaces/Wishlist-item-category.interface';
import { MarascoService } from './MarascoService';

@Injectable()
export class WishlistItemCategoryService extends MarascoService {
  private _url: string = `${environment.apiUrl}wishlist/category`;
  private _wishlistItemCategorySource: WishlistItemCategory;

  public onWishlistItemCategoryChanged = new BehaviorSubject<
    WishlistItemCategory
  >(this._wishlistItemCategorySource);

  public onWishlistItemCategoryCreated = new BehaviorSubject<
    WishlistItemCategory
  >(this._wishlistItemCategorySource);

  constructor(private _authHttp: AuthHttpService) {
    super();
  }
  
  /**
   * @description Gets all user's categories
   * @author Antonio Marasco
   * @date 2019-04-17
   * @returns {Observable<WishlistItemCategory[]>}
   * @memberof WishlistItemCategoryService
   */
  all(): Observable<WishlistItemCategory[]> {
    return this._authHttp.get(this._url).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  /**
   * @description Gets all user's categories including verbose information
   * @author Antonio Marasco
   * @date 2019-04-17
   * @returns {Observable<WishlistItemCategory[]>}
   * @memberof WishlistItemCategoryService
   */
  allDetails(): Observable<WishlistItemCategory[]> {
    return this._authHttp.get(`${this._url}details`).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  /**
   * @description removes an item Category
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} id
   * @returns {Observable<any>}
   * @memberof WishlistItemCategoryService
   */
  delete(id: string): Observable<any> {
    return this._authHttp.delete(`${this._url}${id}`).pipe(
      map((result: any) => result),
      catchError(this.handleError)
    );
  }

  /**
   * @description Gets a category from a category id
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} id
   * @returns {Observable<WishlistItemCategory>}
   * @memberof WishlistItemCategoryService
   */
  get(id: string): Observable<WishlistItemCategory> {
    return this._authHttp.get(`${this._url}${id}`).pipe(
      map((wishlistItemCategory: any) => wishlistItemCategory),
      catchError(this.handleError)
    );
  }

  /**
   * @description Gets details about a particular wishlist item category by category id
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} id
   * @returns {Observable<WishlistItemCategory>}
   * @memberof WishlistItemCategoryService
   */
  getDetails(id: string): Observable<WishlistItemCategory> {
    return this._authHttp.get(`${this._url}${id}/details`).pipe(
      map((wishlistItemCategory: any) => wishlistItemCategory),
      catchError(this.handleError)
    );
  }

  /**
   * @description Inserts a wishlist category into user's category table
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItemCategory} wishlist
   * @returns {Observable<WishlistItemCategory>}
   * @memberof WishlistItemCategoryService
   */
  insert(wishlist: WishlistItemCategory): Observable<WishlistItemCategory> {
    return this._authHttp.post(this._url, JSON.stringify(wishlist)).pipe(
      map((wishlistItemCategory: WishlistItemCategory) => {
        this.onWishlistItemCategoryCreated.next(wishlistItemCategory);
        return wishlistItemCategory;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @description Updates wishlist Item category
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {WishlistItemCategory} wishlistItemCategory
   * @returns {Observable<WishlistItemCategory>}
   * @memberof WishlistItemCategoryService
   */
  update(
    wishlistItemCategory: WishlistItemCategory
  ): Observable<WishlistItemCategory> {
    return this._authHttp
      .put(
        `${this._url}${wishlistItemCategory._id}`,
        JSON.stringify(wishlistItemCategory)
      )
      .pipe(
        map(
          (wishlistItemCategory: WishlistItemCategory) => wishlistItemCategory
        ),
        catchError(this.handleError)
      );
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/
}
