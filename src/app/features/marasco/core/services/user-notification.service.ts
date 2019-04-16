import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthHttpService } from './auth-http.service';

import { UserNotification } from '../interfaces/User-Notification.interface';

@Injectable()
export class UserNotificationService {
  private _url: string = `${environment.apiUrl}notification`;

  constructor(private _authHttp: AuthHttpService) {}

  insert(notification: UserNotification): Observable<UserNotification> {
    return this._authHttp
      .post(`${this._url}`, JSON.stringify(notification))
      .pipe(
        map((userNotification: UserNotification) => {
          return userNotification;
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
