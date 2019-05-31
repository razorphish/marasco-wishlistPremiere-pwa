import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { Wishlist } from '../interfaces/Wishlist.interface';
import { MarascoService } from './MarascoService';

@Injectable()
export class WishlistService extends MarascoService {
  private _url: string = `${environment.apiUrl}wishlist/`;
  private _wishlistSource: Wishlist;
  private _wishlistsSource: Wishlist[];

  public onWishlistSync = new BehaviorSubject<Wishlist[]>(
    this._wishlistsSource
  );

  public onWishlistChanged = new BehaviorSubject<Wishlist>(
    this._wishlistSource
  );

  public onWishlistCreated = new BehaviorSubject<Wishlist>(
    this._wishlistSource
  );

  public onWishlistDeleted = new BehaviorSubject<Wishlist>(
    this._wishlistSource
  );

  constructor(private _authHttp: AuthHttpService) {
    super();
  }

  /**
   * @description Gets all wishlists of a particular user
   * @author Antonio Marasco
   * @date 2019-04-17
   * @returns {Observable<Wishlist[]>}
   * @memberof WishlistService
   */
  allDetails(): Observable<Wishlist[]> {
    return this._authHttp.get(`${this._url}details`).pipe(
      map((wishlists: any) => wishlists),
      catchError(this.handleError)
    );
  }

  /**
   * @description Gets all wishlists by name 'like'
   * @author Antonio Marasco
   * @date 2019-04-22
   * @param {string} name
   * @returns {Observable<Wishlist>}
   * @memberof WishlistService
   */
  byName(name: string): Observable<Wishlist[]> {
    return this._authHttp.get(`${this._url}search/${name}`).pipe(
      map((wishlist: any) => wishlist),
      catchError(this.handleError)
    );
  }

  /**
   * @description Removes a user wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} id
   * @returns {Observable<any>}
   * @memberof WishlistService
   */
  delete(id: string): Observable<any> {
    return this._authHttp.delete(`${this._url}${id}`).pipe(
      map((result: any) => {
        this.onWishlistDeleted.next(result);
        return result;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @description Gets a wishlist by wishlist id
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {string} id
   * @returns {Observable<Wishlist>}
   * @memberof WishlistService
   */
  get(id: string): Observable<Wishlist> {
    return this._authHttp.get(`${this._url}${id}`).pipe(
      map((wishlist: any) => wishlist),
      catchError(this.handleError)
    );
  }

  /**
   * @description Inserts a user wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {Wishlist} wishlist
   * @returns {Observable<Wishlist>}
   * @memberof WishlistService
   */
  insert(wishlist: Wishlist): Observable<Wishlist> {
    return this._authHttp.post(this._url, JSON.stringify(wishlist)).pipe(
      map((wishlist: Wishlist) => {
        this.onWishlistCreated.next(wishlist);
        return wishlist;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @description Syncs users wishlists
   * @author Antonio Marasco
   * @date 2019-05-30
   * @param {string} userId
   * @returns {Observable<Wishlist[]>}
   * @memberof WishlistService
   */
  syncByUserId(userId: string): Observable<Wishlist[]> {
    return this._authHttp.get(`${this._url}sync/${userId}`).pipe(
      map((wishlists: any) => {
        this.onWishlistSync.next(wishlists);
        return wishlists;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @description Updates a user wishlist
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {Wishlist} wishlist
   * @returns {Observable<Wishlist>}
   * @memberof WishlistService
   */
  update(wishlist: Wishlist): Observable<Wishlist> {
    return this._authHttp
      .put(`${this._url}${wishlist._id}`, JSON.stringify(wishlist))
      .pipe(
        map((result: Wishlist) => {
          this.onWishlistChanged.next(wishlist);
          return wishlist;
        }),
        catchError(this.handleError)
      );
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/
}
