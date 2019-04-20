import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { User } from '../interfaces/UserInfo.interface';
import { MarascoService } from './MarascoService';
import { UserNotification } from '../interfaces/User-Notification.interface';
import { DeviceInfo } from '@capacitor/core';
import { UserInfo } from '../models/userInfo.model';

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
      .put(`${this._url}/${user._id}/profile`, JSON.stringify(user))
      .pipe(
        map((userInfo: UserInfo) => {
          let user = new UserInfo(userInfo);
          this.onUserChanged.next(user);
          return user;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * @description Adds a device to the user object
   * @author Antonio Marasco
   * @date 2019-04-17
   * @param {User} user
   * @returns {Observable<User>}
   * @memberof UserService
   */
  addDevice(userId: string, user: DeviceInfo[]): Observable<any> {
    return this._authHttp
      .post(`${this._url}/${userId}/devices`, JSON.stringify(user))
      .pipe(
        map((device: any) => {
          return device;
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
  addNotification(userId: string, user: UserNotification[]): Observable<any> {
    return this._authHttp
      .post(`${this._url}/${userId}/notifications`, JSON.stringify(user))
      .pipe(
        map((notification: any) => {
          return notification;
        }),
        catchError(this.handleError)
      );
  }
  /*///////////////////////////////////////////////
  /* Private Methods
  //////////////////////////////////////////////*/
}
