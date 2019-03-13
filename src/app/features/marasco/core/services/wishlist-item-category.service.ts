import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { WishlistItemCategory } from './../interfaces/Wishlist-item-category.interface';

@Injectable()
export class WishlistItemCategoryService {
  private _url: string = `${environment.apiUrl}wishlist/category`;
  private _wishlistItemCategorySource: WishlistItemCategory;

  public onWishlistItemCategoryChanged = new BehaviorSubject<
    WishlistItemCategory
  >(this._wishlistItemCategorySource);

  public onWishlistItemCategoryCreated = new BehaviorSubject<
    WishlistItemCategory
  >(this._wishlistItemCategorySource);

  constructor(private _authHttp: AuthHttpService) {}

  all(): Observable<WishlistItemCategory[]> {
    return this._authHttp.get(this._url).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  allDetails(): Observable<WishlistItemCategory[]> {
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

  get(id: string): Observable<WishlistItemCategory> {
    return this._authHttp.get(`${this._url}${id}`).pipe(
      map((wishlistItemCategory: any) => wishlistItemCategory),
      catchError(this.handleError)
    );
  }

  getDetails(id: string): Observable<WishlistItemCategory> {
    return this._authHttp.get(`${this._url}${id}/details`).pipe(
      map((wishlistItemCategory: any) => wishlistItemCategory),
      catchError(this.handleError)
    );
  }

  insert(wishlist: WishlistItemCategory): Observable<WishlistItemCategory> {
    return this._authHttp.post(this._url, JSON.stringify(wishlist)).pipe(
      map((wishlistItemCategory: WishlistItemCategory) => {
        this.onWishlistItemCategoryCreated.next(wishlistItemCategory);
        return wishlistItemCategory;
      }),
      catchError(this.handleError)
    );
  }

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

  /**
   * Handles the error
   * @param error : Error
   */
  private handleError(errorResponse: HttpErrorResponse) {
    let errorInfo = {
      code: '',
      message: ''
    };

    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accor
      console.error('An error occurred:', errorResponse.error.message);
    } else if (errorResponse instanceof Response) {
      let errMessage = '';
      try {
        errMessage = errorResponse.message;
      } catch (err) {
        errMessage = errorResponse.statusText;
      }

      return throwError(errMessage);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      //console.error(
      //  `Backend returned code ${errorResponse.status}, ` +
      // `body was:`, errorResponse.error);
      if (errorResponse.error) {
        if (!!errorResponse.error.message) {
          errorInfo.code = '-1';
          errorInfo.message = errorResponse.error.message;
        } else {
          errorInfo.code =
            errorResponse.error.error.code || errorResponse.error.error;
          errorInfo.message =
            errorResponse.error.error_description ||
            errorResponse.error.error.message;
          //console.log(errorResponse.error.error)
        }
      }
    }

    // return an observable with a user-facing error message
    return throwError(errorInfo);
  }
}
