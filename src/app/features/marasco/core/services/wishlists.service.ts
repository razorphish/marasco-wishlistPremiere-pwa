import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { Wishlist } from '../interfaces/Wishlist.interface';

@Injectable()
export class WishlistService {
  private _url: string = environment.apiUrl + 'wishlist/';
  private _headers: Headers;
  private _options: RequestOptions;
  private _wishlistSource: Wishlist;
  private _wishlistsSource: Wishlist[];

  public onWishlistsChanged = new BehaviorSubject<Wishlist[]>(
    this._wishlistsSource
  );

  public onWishlistsCreated = new BehaviorSubject<Wishlist>(
    this._wishlistSource
  );

  constructor(private _authHttp: AuthHttpService) {
    this._headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'q=0.8;application/json;q=0.9.1'
    });

    this._headers.append('X-Requested-With', 'XMLHttpRequest');

    this._options = new RequestOptions({
      headers: this._headers,
      withCredentials: true
    });
  }

  all(): Observable<Wishlist[]> {
    return this._authHttp.get(this._url).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  allDetails(): Observable<Wishlist[]> {
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

  get(id: string): Observable<Wishlist> {
    return this._authHttp.get(`${this._url}${id}`).pipe(
      map((wishlist: any) => wishlist),
      catchError(this.handleError)
    );
  }

  getDetails(id: string): Observable<Wishlist> {
    return this._authHttp.get(`${this._url}${id}/details`).pipe(
      map((wishlist: any) => wishlist),
      catchError(this.handleError)
    );
  }

  insert(wishlist: Wishlist): Observable<Wishlist> {
    return this._authHttp.post(this._url, JSON.stringify(wishlist)).pipe(
      map((wishlist: Wishlist) => {
        this.onWishlistsCreated.next(wishlist);
        return wishlist;
      }),
      catchError(this.handleError)
    );
  }

  update(wishlist: Wishlist): Observable<Wishlist> {
    return this._authHttp
      .put(`${this._url}${wishlist._id}`, JSON.stringify(wishlist))
      .pipe(
        map((wishlist: Wishlist) => wishlist),
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
