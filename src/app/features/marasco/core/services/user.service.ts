import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { User } from '../interfaces/UserInfo.interface';

@Injectable()
export class UserService {
  private _url: string = `${environment.apiUrl}user`;

  private _userSource: User;

  public onUserChanged = new BehaviorSubject<User>(
    this._userSource
  );


  constructor(private _authHttp: AuthHttpService) {}

  update(user: User): Observable<User> {
    return this._authHttp
      .put(
        `${this._url}/${user._id}/notifications`,
        JSON.stringify(user)
      )
      .pipe(
        map((user: User) => {
          this.onUserChanged.next(user);
          return user;
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
