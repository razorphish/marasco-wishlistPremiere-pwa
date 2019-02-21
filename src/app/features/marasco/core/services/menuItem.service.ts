import { MenuModel } from './../models/menu.model';
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {*} error
 * @param {*} data
 */
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';

import {
    HttpClient,
    HttpErrorResponse
} from '@angular/common/http';

import { map, catchError, share } from 'rxjs/operators';

import { environment } from '@env/environment';

import { StorageService } from './storage.service';
import { Response } from '@angular/http';
import { AuthTokenService } from './auth-token.service';

import { Store } from '@ngrx/store';

import { AuthState } from '../store/auth/auth.reducer';


@Injectable()
export class MenuItemService {
    private menuSource: MenuModel;

    private _authUrl: string = environment.apiUrlAuth;
    private _apiUrl: string = environment.apiUrl;
    private _clientId = environment.clientId;
    private _clientSecret = environment.clientSecret;

    public onMenuStateChanged = new BehaviorSubject<MenuModel>(this.menuSource);

    constructor(
        public authToken: AuthTokenService,
        private _http: HttpClient,
        private _storage: StorageService,
        private _store: Store<AuthState>) {

    }

    login(
        username: string,
        password: string,
        forceRefresh: boolean = false):
        Observable<MenuModel> {
        const params: any = {
            username: username,
            password: password,
            forceRefresh: forceRefresh,
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: 'password'
        };

        return this._http
            .post<MenuModel>(this._authUrl + 'token', params)
            .pipe(map((menu: MenuModel) => {
                // login successful if there's a jwt token in the response
                this.menuSource = new MenuModel(menu);
                this.onMenuStateChanged.next(this.menuSource);
                return menu;
            }),
                catchError(this.handleError)
            );
    }


    menuErrorHandler(error) {
        this.onMenuStateChanged.next(null);
    }


    ///////////////////////////////////////
    // Private Methods
    ///////////////////////////////////////

    /**
     * handles the errors from api calls
     * @param errorResponse Error Response
     */
    private handleError(errorResponse: HttpErrorResponse) {
        const errorInfo = {
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
            // console.error(
            //  `Backend returned code ${errorResponse.status}, ` +
            // `body was:`, errorResponse.error);
            if (errorResponse.error) {
                errorInfo.code = errorResponse.error.error.code || errorResponse.error.error;
                errorInfo.message = errorResponse.error.error_description || errorResponse.error.error.message;
                // console.log(errorResponse.error.error)
            }
        }

        // return an observable with a user-facing error message
        return throwError(errorInfo);
    }
}
