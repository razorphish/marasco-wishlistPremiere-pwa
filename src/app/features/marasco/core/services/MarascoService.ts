import { throwError } from 'rxjs';
import { Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class MarascoService {
  /**
   *Creates an instance of MarascoService.
   * @author Antonio Marasco
   * @date 2019-04-17
   * @memberof MarascoService
   */
  constructor() {}

  /**
   * @description Handles error derived from api calls
   * @author Antonio Marasco
   * @date 2019-04-17
   * @private
   * @param {HttpErrorResponse} errorResponse
   * @returns
   * @memberof MarascoService
   */
  protected handleError(errorResponse: HttpErrorResponse) {
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
            errorResponse.error.code ||
            errorResponse.error.error.code ||
            errorResponse.error.error;
          errorInfo.message =
            errorResponse.error.errmsg ||
            errorResponse.error.error_description ||
            errorResponse.error.error.message;
        }
      }
    }

    // return an observable with a user-facing error message
    return throwError(errorInfo);
  }

  /**
   * @description Handles the error
   * @author Antonio Marasco
   * @date 2019-04-17
   * @private
   * @param {*} error
   * @returns
   * @memberof UserService
   * @deprecated This error has been deprecated and will not be available in subsequenst release 2.0
   */
  protected handleErrorDeprecated(error: any) {
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
