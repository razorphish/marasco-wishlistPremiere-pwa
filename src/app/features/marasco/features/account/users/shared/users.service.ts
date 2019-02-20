import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../../../environments/environment';
import { IApiResponse } from '../../../../core/interfaces/IApiResponse.interface';
import { AuthHttpService } from '../../../../core/services/auth-http.service';

import { User } from '../../../../core/interfaces/UserInfo.interface';
import { IToken } from '../../tokens/shared/IToken';

@Injectable()
export class UsersService {

  private _url: string = environment.apiUrl + 'user/';

  constructor(private _authHttp: AuthHttpService) {
  }

  all(): Observable<User[]> {
    return (
      this._authHttp
        .get(this._url)
        .pipe(map((users: any) => users),
          // .do(
          //   data => console.log('All: ' + JSON.stringify(data))
          // )
          catchError(this.handleError))
    );
  }

  allDetails(): Observable<User[]> {
    return (
      this._authHttp
        .get(`${this._url}details`)
        .pipe(map((users: any) => users),
          // .do(
          //   data => console.log('All: ' + JSON.stringify(data))
          // )
          catchError(this.handleError))
    );
  }

  delete(id: any): Observable<IApiResponse> {
    return this._authHttp
      .delete(this._url + id)
      .pipe(map((result: any) => result),
        catchError(this.handleError));
  }

  deleteTokens(userId: any): Observable<any> {
    return this._authHttp
      .delete(`${this._url}${userId}/tokens`)
      .pipe(map((result: any) => result),
        catchError(this.handleError));
  }

  details(userId: any): Observable<User> {
    return this._authHttp
      .get(`${this._url}${userId}/details`)
      .pipe(map((user: any) => user),
        catchError(this.handleError));
  }

  get(id: string): Observable<User> {
    return this._authHttp
      .get(this._url + id)
      .pipe(map((user: any) => user),
        catchError(this.handleError));
  }

  insert(user: User): Observable<User> {
    return this._authHttp
      .post(this._url, JSON.stringify(user))
      .pipe(map((user: any) => user),
        catchError(this.handleError))
  }

  tokens(userId: string): Observable<IToken[]> {

    return this._authHttp
      .get(`${this._url}${userId}/tokens`)
      .pipe(map((tokens: any) => tokens),
        catchError(this.handleError))
  }

  update(user: User): Observable<User> {
    return this._authHttp
      .put(this._url + user._id, JSON.stringify(user))
      .pipe(map((user: any) => user),
        catchError(this.handleError));
  }

  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/

  /**
   * Handles the error
   * @param error : Error
   */
  private handleError(error: any) {

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
