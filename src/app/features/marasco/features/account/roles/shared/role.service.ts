import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable, throwError } from 'rxjs';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

import { map, catchError } from 'rxjs/operators';

import { environment } from './../../../../../../../environments/environment';
import { IApiResponse } from '../../../../core/interfaces/IApiResponse.interface';
import { AuthHttpService } from '../../../../core/services/auth-http.service';

import { IRole } from '../../roles';

@Injectable()
export class RoleService {
  private _url: string = environment.apiUrl + 'role/';
  private _headers: Headers;
  private _options: RequestOptions;

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

  all(): Observable<IRole[]> {
    return this._authHttp
      .get(this._url)
      .pipe(map((roles: any) => roles),
      catchError(this.handleError));
  }

  delete(id: string): Observable<any> {
    return this._authHttp
      .delete(this._url + id)
      .pipe(map((result: any) => result),
        catchError(this.handleError))
  }

  get(id: string): Observable<IRole> {
    // return this._http.get(this._url + '/' + id)
    return this._authHttp
      .get(this._url + id)
      .pipe(map((role: any) => role),
      catchError(this.handleError));

    //    return this.http.get(this._heroesUrl)
    // .map(res => (<Hero[]>res.json().data).filter(hero => hero.id === id))
    // .do(data => console.log(data))
    // .catch(this.handleError);
  }

  insert(role: IRole): Observable<IRole> {
    return this._authHttp
      .post(this._url, JSON.stringify(role))
      .pipe(map((role: IRole) => role),
        catchError(this.handleError));
  }

  update(role: IRole): Observable<IRole> {
    return this._authHttp
      .put(this._url + role._id, JSON.stringify(role))
      .pipe(map((role: IRole) => role),
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
