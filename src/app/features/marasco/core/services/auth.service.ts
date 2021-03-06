/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {*} error
 * @param {*} data
 */
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';

import { UserCredential } from '../models/userCredential.model';
import { StorageService } from './storage.service';
import { UserInfo } from '../models/userInfo.model';
import { TokenResult } from '../models/tokenResult.model';
import { Response } from '@angular/http';
import { AuthTokenService } from './auth-token.service';
import { User } from '../interfaces/UserInfo.interface';
import { MarascoService } from './MarascoService';

const USER_TOKEN = 'token';
const USER_LOGGED_ONCE = 'logged_once';

const defaultUser: User = new UserInfo();
defaultUser._id = '';
defaultUser.username = 'Guest';
defaultUser.firstName = 'Guest';
defaultUser.lastName = '';
defaultUser.email = '@';

@Injectable()
export class AuthService extends MarascoService {
  private _userSource: UserInfo;

  private _authUrl: string = environment.apiUrlAuth;
  private _apiUrl: string = environment.apiUrl;
  private _clientId = environment.clientId;
  private _clientSecret = environment.clientSecret;

  public onLoginSuccess = new BehaviorSubject<boolean>(false);
  public onAuthStateChanged = new BehaviorSubject<UserInfo>(this._userSource);
  public onIdTokenChanged = new BehaviorSubject<UserInfo>(this._userSource);

  public lastUrl: string;
  public redirectUrl: string;
  public tokenIsBeingRefreshed: Subject<boolean>;
  public user$ = new BehaviorSubject<User>({ ...defaultUser });

  constructor(
    public authToken: AuthTokenService,
    private _http: HttpClient,
    private _storage: StorageService
  ) {
    super();
    this.lastUrl = '/';

    this.tokenIsBeingRefreshed = new Subject<boolean>();
    this.tokenIsBeingRefreshed.next(false);

    this.hasToken().then(token => {
      let isToken = token ? true : false;
      this.onLoginSuccess.next(isToken);
    });
  }

  //createUserAndRetrieveDataWithEmailAndPassword(
  //  email: string,
  //  password: string
  //): Promise<UserCredential>;

  createUserWithEmailAndPassword(user: UserInfo): Observable<any> {
    const url = this._apiUrl + 'auth/register-with-email-password';

    return this._http.post<any>(url, user).pipe(
      map((user: UserInfo) => {
        // login successful if there's a jwt token in the response
        return user;
      }),
      catchError(this.handleError)
    );
  }

  createUserWithEmail(user: UserInfo): Observable<any> {
    const url = this._apiUrl + 'auth/register-with-email';
    //Set status to pending
    user.colo = 'mobile';

    return this._http.post<any>(url, user).pipe(
      map((user: UserInfo) => {
        // login successful if there's a jwt token in the response
        return user;
      }),
      catchError(this.handleError)
    );
  }

  //confirmPasswordReset(code: string, newPassword: string): Promise<void>;

  isLoggedIn(): Observable<boolean> {
    return this.onLoginSuccess.asObservable();
  }

  loggedIn() {
    return this.tokenNotExpired();
  }

  login(
    username: string,
    password: string,
    forceRefresh: boolean = false
  ): Observable<TokenResult> {
    const params: any = {
      username: username,
      password: password,
      forceRefresh: forceRefresh,
      client_id: this._clientId,
      client_secret: this._clientSecret,
      applicationId: environment.application,
      grant_type: 'password'
    };

    return this._http.post<TokenResult>(this._authUrl + 'token', params).pipe(
      map((credential: TokenResult) => {
        // login successful if there's a jwt token in the response

        if (credential && credential.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          //Inform everyone
          this.onLoginSuccess.next(true);

          this._userSource = new UserInfo(credential.user);
          this._userSource.token = credential;
          this._userSource.token.forceRefresh = forceRefresh;
          this.user$.next(this._userSource);
          this.onAuthStateChanged.next(this._userSource);
          this.onIdTokenChanged.next(this._userSource);
          return credential;
        }
      }),
      catchError(this.handleError)
    );
  }

  loginSocial(socialUser: any): Observable<TokenResult> {
    socialUser.applicationId = environment.application;
    const params: any = {
      username: 'social',
      password: '784#@#sd',
      client_id: this._clientId,
      client_secret: this._clientSecret,
      grant_type: 'password',
      applicationId: environment.application,
      socialUser: socialUser
    };

    return this._http.post<TokenResult>(this._authUrl + 'token', params).pipe(
      map((credential: TokenResult) => {
        // login successful if there's a jwt token in the response

        if (credential && credential.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          //Inform everyone
          this.onLoginSuccess.next(true);

          this._userSource = new UserInfo(credential.user);
          this._userSource.token = credential;
          this.user$.next(this._userSource);
          this.onAuthStateChanged.next(this._userSource);
          this.onIdTokenChanged.next(this._userSource);
          return credential;
        }
      }),
      catchError(this.handleError)
    );
  }

  refreshToken() {
    const params: any = {
      client_id: this._clientId,
      client_secret: this._clientSecret,
      grant_type: 'refresh_token',
      refresh_token: this.authToken.token.refresh_token
    };

    return this._http.post(this._authUrl + 'token', params).pipe(
      map((credential: TokenResult) => {
        // Business as usual
        // login successful if there's a jwt token in the response
        if (credential && credential.access_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          //Uncomment following lines if refreshtoken returns entire User object
          this.onLoginSuccess.next(true);

          this._userSource = new UserInfo(credential.user);
          this._userSource.token = credential;
          this.user$.next(this._userSource);

          this.onIdTokenChanged.next(this._userSource);
          this.authToken.token = credential;
          return credential;
        }
      }),
      catchError(this.handleError)
    );
  }

  refreshTokenErrorHandler(error) {
    this.onLoginSuccess.next(false);
    this.tokenIsBeingRefreshed.next(false);
    this.onIdTokenChanged.next(null);
  }

  refreshTokenSuccessHandler(data) {
    if (data.error) {
      this.tokenIsBeingRefreshed.next(false);
      return false;
    } else {
      this.tokenIsBeingRefreshed.next(false);
    }
  }

  forgotPassword(userInfo: any): Observable<any> {
    const url = this._apiUrl + 'auth/forgot-password';

    return this._http.post<any>(url, userInfo).pipe(
      map((credential: any) => {}),
      catchError(this.handleError)
    );
  }

  addTokens(accessToken: string, refreshToken: string) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    user.access_token = accessToken;
    user.refresh_token = refreshToken;

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('access_token', accessToken);
    //this.loggedInUser = user;
    //this.currentUser.next(JSON.stringify(user));
  }

  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return new Observable<UserCredential>(null);
  }

  signOut(): Observable<any> {
    const params: any = {
      access_token: this.authToken.token.access_token
    };

    const headers = new HttpHeaders().set('Authorization', this.authToken.token.access_token);

    const url = this._apiUrl + 'auth/logout';
    const body: any = {};
    return this._http.post(url, body, { headers: headers }).pipe(
      map((response: Response) => {
        // logout response

        //Notify listeners
        this.onLoginSuccess.next(false);
        this.user$.next(null);
        this.onAuthStateChanged.next(null);
        this.onIdTokenChanged.next(null);
      }),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  resetPasswordRequest(token: string): Observable<any> {
    const url = `${this._apiUrl}auth/reset-password/${token}`;

    return this._http.get<any>(url).pipe(
      map((result: any) => {
        return result;
      }),
      catchError(this.handleError)
    );
  }

  resetPassword(
    token: string,
    password: string,
    confirmPassword: string
  ): Observable<any> {
    const url = `${this._apiUrl}auth/reset-password/${token}`;

    return this._http
      .post<any>(url, { password: password, confirmPassword: confirmPassword })
      .pipe(
        map((result: any) => {
          return result;
        }),
        catchError(this.handleError)
      );
  }

  tokenRequiresRefresh(): boolean {
    if (!this.loggedIn()) {
    }

    return !this.loggedIn();
  }

  ///////////////////////////////////////
  //Private Methods
  ///////////////////////////////////////

  /**
   * True if token exists, otherwise false;
   */
  private hasToken(): Promise<boolean> {
    return this._storage.get(USER_TOKEN);
  }

  /**
   * Determine if token has expired
   */
  private tokenNotExpired(): boolean {
    let token: TokenResult = this.authToken.token;

    const d1 = new Date();
    const d2 = new Date(token.expirationTime);

    if (d1 > d2) {
      return false;
    }
    return true;
  }
}
