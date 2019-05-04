import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, filter, map, switchMap, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { AuthState } from './auth.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AuthTokenService } from '../../services/auth-token.service';
import { AuthService } from '../../services/auth.service';
import * as actions from './auth.actions';
import { TokenResult } from '../../models/tokenResult.model';
import { environment } from '@env/environment';

import {
  AuthService as SocialAuthService,
  SocialUser
} from 'angularx-social-login';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedInLoginProvider
} from 'angularx-social-login';
import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { _daysInMonth } from 'ngx-bootstrap/chronos/utils/date-getters';
import { UserInfo } from '../../models/userInfo.model';

@Injectable()
export class AuthEffects {
  redirectUrl: string = environment.redirectUrl;
  loginUrl: string = environment.loginUrl;
  resetPasswordUrl: string = environment.resetPasswordUrl;
  registerUrl: string = environment.registerUrl;

  @Effect({ dispatch: false })
  login$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.LoginAction),
    tap((data: any) => {
      this._auth
        .login(
          data.payload.username,
          data.payload.password,
          data.payload.forceRefresh
        )
        .subscribe(
          (_: TokenResult) => {
            _;
          },
          (error: any) => {
            this.dispatchError(error);
          }
        );
    })
  );

  @Effect({ dispatch: false })
  mobileLogin$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.MobileSign),
    tap((data: any) => {
      this._auth.loginSocial(data.payload).subscribe(
        (_: TokenResult) => {
          _;
        },
        (error: any) => {
          this.dispatchError(error);
        }
      );
    })
  );

  @Effect({ dispatch: false })
  logout$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.LogoutAction),
    tap((data: any) => {
      this._router.navigate([this.loginUrl]);
      this._auth.signOut().subscribe((_: any) => _);
    })
  );

  @Effect({ dispatch: false })
  forgotPassword$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.ForgotPasswordAction),
    tap((data: any) => {
      this._auth.forgotPassword(data.payload).subscribe(
        (_: any) => {
          this.notify(
            'Request Forgot Password Success',
            'Please check your email for further instructions.',
            null,
            true
          );
          this._router.navigate([this.loginUrl]);
        },
        (error) => {
          this.dispatchErrorNotification(error);
        }
      );
    })
  );

  @Effect({ dispatch: false })
  resetPassword$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.ResetPasswordAction),
    tap((data: any) => {
      this._auth
        .resetPassword(
          data.payload.token,
          data.payload.password,
          data.payload.passwordConfirm
        )
        .subscribe(
          (_: any) => {
            this.notify(
              'Reset Success',
              "You're password has been changed.  Please login at your earliest convenience",
              null,
              true
            );
            // Below code places parameters in url
            //this._router.navigate([this.loginUrl, _]);
            this._router.navigate([this.loginUrl]);
          },
          (error) => {
            this.dispatchErrorNotification(error);
          }
        );
    })
  );

  @Effect({ dispatch: false })
  resetPasswordRequest$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.ResetPasswordRequestAction),
    tap((data: any) => {
      this._router.navigate([this.loginUrl]);
      this._auth.signOut().subscribe((_: any) => _);
    })
  );

  @Effect({ dispatch: false })
  signup$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.SignupAction),
    map((data: any) => data.payload),
    tap((user: UserInfo) => {
      this._auth.createUserWithEmailAndPassword(user).subscribe(
        (_: any) => {
          if (!!_.error) {
            this.dispatchErrorNotification(_.error);
            return;
          }

          this.notify(
            'Registration Success',
            'You can now enjoy our Wishlist Premiere Platform.',
            null,
            true
          );
          this._router.navigate([this.loginUrl]);
        },
        (error: any) => {
          this.dispatchError(error);
        }
      );
    })
  );

  @Effect({ dispatch: true })
  signupMobile$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.SignupMobileAction),
    map((data: any) => data.payload),
    switchMap((user: UserInfo) =>
      this._auth.createUserWithEmail(user).pipe(
        tap((result: UserInfo) => {
          this.notify(
            'Registration Success!',
            'You can now enjoy our Wishlist Premiere Platform.',
            null,
            true
          );
        }),
        map((result: UserInfo) => new actions.MobileSign(result)),
        catchError((error) => {
          this.dispatchError(error);
          return empty();
        })
      )
    )
  );

  @Effect({ dispatch: false })
  googleSign$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.GoogleSign),
    tap((data: any) => {
      this._authService
        .signIn(GoogleLoginProvider.PROVIDER_ID)
        .then((socialUser: SocialUser) => {
          this._auth.loginSocial(socialUser).subscribe(
            (_: TokenResult) => {
              _;
            },
            (error: any) => {
              this.dispatchError(error);
            }
          );
        })
        .catch((error: any) => {
          this.dispatchError(error);
        });
    })
  );

  @Effect({ dispatch: false })
  facebookSign$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.FacebookSign),
    tap((data: any) => {
      this._authService
        .signIn(FacebookLoginProvider.PROVIDER_ID)
        .then((socialUser: SocialUser) => {
          this._auth.loginSocial(socialUser).subscribe(
            (_: TokenResult) => {
              _;
            },
            (error: any) => {
              this.dispatchError(error);
            }
          );
        })
        .catch((error: any) => {
          this.dispatchError(error);
        });
    })
  );

  @Effect({ dispatch: false })
  linkedInSign$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.LinkedInSign),
    tap((data: any) => {
      this._authService
        .signIn(LinkedInLoginProvider.PROVIDER_ID)
        .then((socialUser: SocialUser) => {
          this._auth.loginSocial(socialUser).subscribe(
            (_: TokenResult) => {
              _;
            },
            (error: any) => {
              this.dispatchError(error);
            }
          );
        })
        .catch((error: any) => {
          this.dispatchError(error);
        });
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.LoginRedirect),
    tap((data: any) => {
      this.redirectUrl = data.payload || '';
      this._router.navigate([this.loginUrl]);
    })
  );

  @Effect({ dispatch: false })
  appUserInitRedirect$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.AppUserInitRedirect),
    tap((data: any) => {
      this._router.navigateByUrl(data.payload);
    })
  );

  @Effect({ dispatch: false })
  authRedirect$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.AuthTokenPayload),
    filter(
      (_) =>
        this._router.url === this.loginUrl ||
        this._router.url === this.resetPasswordUrl ||
        this._router.url === this.registerUrl
    ),
    tap((data: any) => {
      this._router.navigate([this.redirectUrl]);
    })
  );

  @Effect()
  authUser$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.AuthUserChange),
    // tap((data: any) => console.log('Whatup!!')),
    // tap((data: any) => console.log(data)),
    switchMap((data: any) => data.payload.getIdToken()),
    tap<TokenResult>((_) => (this._authTokenService.token = _)),
    map((_) => this._authTokenService.readPayload(_)),
    map((_) => new actions.AuthTokenPayload(_))
  );

  dispatchError = (err) => {
    //Notify, if applicable
    this.dispatchErrorNotification(err);
    this._store.dispatch(
      new actions.AuthFailure({
        code: err.code,
        message: err.message
      })
    );
  };

  dispatchErrorNotification(error: any) {
    if (!error.code) {
      this.notify(
        'Fatal Error occurred',
        'Please contact your administrator',
        error
      );
      return;
    }

    switch (error.code) {
      case 'invalid_grant':
        this.notify(
          'Invalid username and/or password',
          'Please re-enter your sign in credentials.',
          ' '
        );
        break;
      case 11000:
        //this.notify('Oops! Error occurred', !!error.errmsg ? error.errmsg : 'Please contact your administrator');
        this.notify(
          'We found you!',
          "If you do not know your password click the 'Reset Password' link",
          'Found!',
          true
        );
        break;
      default:
        if (!!error.message) {
          this.notify('Error occurred', error.message);
        } else {
          this.notify('Error occurred', 'Please contact your administrator');
        }
        break;
    }
  }

  notify(title, content, number?, isMessage?) {
    var color = isMessage ? '#739E73' : '#C46A69';
    var icon = isMessage ? 'fa fa-check' : 'fa fa-warning shake animated';

    this._notificationService.bigBox({
      title: title,
      content: content,
      color: color,
      icon: icon,
      number: number || '1',
      timeout: 4000,
      sound: false
    });
  }

  constructor(
    private _actions$: Actions,
    private _store: Store<AuthState>,
    private _authTokenService: AuthTokenService,
    private _auth: AuthService,
    private _router: Router,
    private _authService: SocialAuthService,
    private _notificationService: NotificationService
  ) {
    //Login, Logout, Token Refresh
    this._auth.onIdTokenChanged.subscribe((authUser) => {
      if (authUser) {
        this._store.dispatch(new actions.AuthUserChange(authUser));
      } else {
        this._authTokenService.token = null;
        this._store.dispatch(new actions.NullToken());
      }
    });
  }
}
