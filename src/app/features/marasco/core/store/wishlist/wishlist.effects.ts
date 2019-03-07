import { WishlistService } from '../../services/wishlists.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, filter, map, switchMap, catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { WishlistState } from './wishlist.reducer';
import { AuthService } from '../../services/auth.service';
import * as actions from './wishlist.actions';

import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { _daysInMonth } from 'ngx-bootstrap/chronos/utils/date-getters';
import { WishlistStateService } from '../../services/wishlists.state.service';
import { Wishlist } from '../../interfaces/Wishlist.interface';

@Injectable()
export class WishlistEffects {
  @Effect({ dispatch: false })
  createWishlist$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistAction),
    tap((data: any) => {
      // this._auth
      //   .login(
      //     data.payload.username,
      //     data.payload.password,
      //     data.payload.forceRefresh
      //   )
      //   .subscribe(
      //     (_: TokenResult) => {
      //       _;
      //     },
      //     (error: any) => {
      //       this.dispatchError(error);
      //     }
      //   );
    })
  );

  @Effect()
  wishlistChange$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.WishlistsChange),
    // tap((data: any) => console.log('Whatup!!')),
    // tap((data: any) => console.log(data)),
    switchMap((data: any) => data.payload.getWishlists()),
    tap<Wishlist[]>((_) => (this._wishlistStateService.wishlists = _)),
    map((_) => new actions.WishlistsPayload(_))
  );

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
          'Found!'
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
      timeout: 6000
    });
  }

  constructor(
    private _actions$: Actions,
    private _store: Store<WishlistState>,
    private _auth: AuthService,
    private _router: Router,
    private _notificationService: NotificationService,
    private _wishlistStateService: WishlistStateService,
    private _wishlistService: WishlistService
  ) {
    //Login, Logout
    this._auth.onAuthStateChanged.subscribe((user) => {
      if (user) {
        this._store.dispatch(new actions.WishlistsChange(user));
      } else {
        this._wishlistStateService.wishlists = null;
        this._store.dispatch(new actions.WishlistsNull());
      }
    });
  }
}
