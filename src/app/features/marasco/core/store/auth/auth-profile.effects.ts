import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { AuthState } from './auth.reducer';
import * as actions from './auth.actions';
import { AuthTokenService } from '../../services/auth-token.service';


/**
 * These effects will require a delay if we are updating the storage db
 */
@Injectable()
export class AuthProfileEffects {

  @Effect()
  authUserProfileEditSuccess$ = this._actions$.pipe(
    ofType(actions.AuthActionTypes.AuthUserProfileEditSuccess),
    switchMap((data: any) => this._authTokenService.updateUser(data.payload)),
    map((_) => this._authTokenService.readPayload(_)),
    map((_) => new actions.AuthTokenPayload(_))
  );
/**
 *Creates an instance of AuthProfileEffects.
 * @param {Actions} _actions$
 * @param {Store<AuthState>} _store
 * @param {UserService} _userService
 * @param {AuthTokenService} _authTokenService
 * @memberof AuthProfileEffects
 */
constructor(
    private _actions$: Actions,
    private _store: Store<AuthState>,
    private _userService: UserService,
    private _authTokenService: AuthTokenService,
  ) {

    //Profile update
    this._userService.onUserChanged.subscribe(
      (user) => {
        if (!!user) {
          this._store.dispatch(
            new actions.AuthUserProfileEditSuccess(user)
          );
        }
      }
    );
  }
}
