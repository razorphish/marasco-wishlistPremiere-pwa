import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { User } from '../interfaces/UserInfo.interface';
import { MarascoService } from './MarascoService';

@Injectable()
export class UserService extends MarascoService {
  private _url: string = `${environment.apiUrl}user`;

  private _userSource: User;

  public onUserChanged = new BehaviorSubject<User>(this._userSource);

  constructor(private _authHttp: AuthHttpService) {
    super();
  }

  /**
   * @description Updates user object
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserService
   */
  update(user: User): Observable<User> {
    return this._authHttp
      .put(`${this._url}/${user._id}`, JSON.stringify(user))
      .pipe(
        map((user: User) => {
          this.onUserChanged.next(user);
          return user;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * @description Adds a notification to the user object
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserService
   */
  addNotification(user: User): Observable<User> {
    return this._authHttp
      .post(`${this._url}/${user._id}/notifications`, JSON.stringify(user))
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
}
