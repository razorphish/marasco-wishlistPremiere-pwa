import { MenuModel } from './../models/menu.model';
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {*} error
 * @param {*} data
 */
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { map, catchError, } from 'rxjs/operators';

import { environment } from '@env/environment';

import { AuthTokenService } from './auth-token.service';

import { MarascoService } from './MarascoService';

@Injectable()
export class MenuItemService extends MarascoService {
  private menuSource: MenuModel;

  private _authUrl: string = environment.apiUrlAuth;
  private _clientId = environment.clientId;
  private _clientSecret = environment.clientSecret;

  public onMenuStateChanged = new BehaviorSubject<MenuModel>(this.menuSource);

  constructor(
    public authToken: AuthTokenService,
    private _http: HttpClient
  ) {
    super();
  }

  login(
    username: string,
    password: string,
    forceRefresh: boolean = false
  ): Observable<MenuModel> {
    const params: any = {
      username: username,
      password: password,
      forceRefresh: forceRefresh,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      grant_type: 'password'
    };

    return this._http.post<MenuModel>(this._authUrl + 'token', params).pipe(
      map((menu: MenuModel) => {
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
}
