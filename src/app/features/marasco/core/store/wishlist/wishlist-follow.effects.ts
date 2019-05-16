import { WishlistFollowStateService } from './../../services/wishlist-follow.state.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, map, switchMap, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from '../../services/auth.service';

import { WishlistState } from './wishlist.reducer';
import * as actions from './wishlist.actions';

import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { _daysInMonth } from 'ngx-bootstrap/chronos/utils/date-getters';
import { WishlistStateService } from '../../services/wishlists.state.service';
import { Wishlist } from '../../interfaces/Wishlist.interface';
import { WishlistFollowService } from '../../services/wishlist-follow.service';
import { WishlistFollow } from '../../interfaces/Wishlist-Follow.interface';

@Injectable()
export class WishlistFollowEffects {
  @Effect()
  wishlistFollowChange$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.WishlistFollowChange),
    delay(1000),
    switchMap((data: any) => data.payload.getWishlistFollows()),
    tap<WishlistFollow[]>(
      (_) =>
        (this._wishlistFollowStateService.wishlistFollows = _)
    ),
    map((_) => new actions.WishlistFollowPayload(_))
  );

  @Effect({ dispatch: false })
  wishlistFollowNull$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.WishlistFollowNull),
    delay(1000),
    tap<WishlistFollow[]>(
      () =>
        (this._wishlistFollowStateService.wishlistFollows = null)
    )
  );
  
  @Effect({ dispatch: false })
  createWishlistFollow$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistFollowAction),
    map((data: any) => data.payload),
    tap((wishlistFollow: any) => {
      this._wishlistFollowService.insert(wishlistFollow).subscribe(
        (result: any) => {
          if (!!result.error) {
            this.dispatchErrorNotification(result.error);
            return;
          }

          this.notifysm(
            'Follow Created!',
            'Follow has been added to your wishlist.',
            null,
            true
          );
        },
        (error: any) => {
          this.dispatchError(error);
        }
      );
    })
  );

  @Effect({ dispatch: false })
  editWishlistFollow$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.EditWishlistFollowAction),
    map((data: any) => data.payload),
    tap((wishlistFollow: any) => {
      this._wishlistFollowService.update(wishlistFollow).subscribe(
        (result: any) => {
          if (!!result.error) {
            this.dispatchErrorNotification(result.error);
            return;
          }

          this.notifysm(
            'Follow Updated!',
            'Follow has been updated Successfully',
            null,
            true
          );
        },
        (error: any) => {
          this.dispatchError(error);
        }
      );
    })
  );

  @Effect({ dispatch: false })
  deleteWishlistFollow$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.DeleteWishlistFollowAction),
    map((data: any) => data.payload),
    tap((wishlistFollow: any) => {
      this._notificationService.smartMessageBox(
        {
          title: 'Delete?',
          content: 'Are you sure you want to delete this Follow?',
          buttons: '[No][Yes]'
        },
        (ButtonPressed) => {
          if (ButtonPressed === 'Yes') {
            this._wishlistFollowService.delete(wishlistFollow).subscribe(
              (result: any) => {
                if (!!result.error) {
                  this.dispatchErrorNotification(result.error);
                  return;
                }

                this.notifysm(
                  'Follow Deleted!',
                  'Follow has been removed from your wishlist.',
                  null,
                  true
                );
              },
              (error: any) => {
                this.dispatchError(error);
              }
            );
          }
          if (ButtonPressed === 'No') {
          }
        }
      );
    })
  );

  @Effect()
  wishlistFollowCreateSuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistFollowSuccess),
    switchMap((data: any) =>
      this._wishlistFollowStateService.add(data.payload)
    ),
    tap<WishlistFollow[]>((_) => (this._wishlistFollowStateService.wishlistFollows = _)),
    map((_) => new actions.WishlistFollowPayload(_))
  );

  @Effect()
  wishlistFollowEditSuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.EditWishlistFollowSuccess),
    switchMap((data: any) =>
      this._wishlistFollowStateService.edit(data.payload)
    ),
    tap<Wishlist[]>((_) => (this._wishlistStateService.wishlists = _)),
    map((_) => new actions.WishlistFollowPayload(_))
  );

  @Effect()
  wishlistFollowDeleteSuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.DeleteWishlistFollowSuccess),
    switchMap((data: any) =>
      this._wishlistStateService.deleteFollow(data.payload)
    ),
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

  dispatchError = (err) => {
    //Notify, if applicable
    this.dispatchErrorNotification(err);
  };

  notify(title, content, number?, isMessage?) {
    var color = isMessage ? '#739E73' : '#C46A69';
    var icon = isMessage ? 'fa fa-check' : 'fa fa-warning shake animated';

    this._notificationService.bigBox({
      title: title,
      content: content,
      color: color,
      icon: icon,
      number: number || '1',
      timeout: 2000,
      sound: false
    });
  }

  notifysm(title, content, number?, isMessage?) {
    var color = isMessage ? '#739E73' : '#C46A69';
    var icon = isMessage ? 'fa fa-check' : 'fa fa-warning shake animated';

    this._notificationService.smallBox({
      title: title,
      content: content,
      color: color,
      icon: icon,
      number: number || '1',
      timeout: 2000,
      sound: false
    });
  }

  constructor(
    private _actions$: Actions,
    private _store: Store<WishlistState>,
    private _auth: AuthService,
    private _notificationService: NotificationService,
    private _wishlistStateService: WishlistStateService,
    private _wishlistFollowService: WishlistFollowService,
    private _wishlistFollowStateService: WishlistFollowStateService
  ) {
    //Login, Logout
    this._auth.onAuthStateChanged.subscribe((user) => {
      if (!!user) {
        this._store.dispatch(new actions.WishlistFollowChange(user));
      } else {
        this._store.dispatch(new actions.WishlistFollowNull());
      }
    });

    // Follow created
    this._wishlistFollowService.onWishlistFollowCreated.subscribe(
      (wishlistFollow) => {
        if (!!wishlistFollow) {
          this._store.dispatch(
            new actions.CreateWishlistFollowSuccess(wishlistFollow)
          );
        }
      }
    );

    // Follow changed/edited
    this._wishlistFollowService.onWishlistFollowChanged.subscribe(
      (wishlistFollow) => {
        if (!!wishlistFollow) {
          this._store.dispatch(
            new actions.EditWishlistFollowSuccess(wishlistFollow)
          );
        }
      }
    );

    this._wishlistFollowService.onWishlistFollowDeleted.subscribe(
      (wishlistFollow) => {
        if (!!wishlistFollow) {
          this._store.dispatch(
            new actions.DeleteWishlistFollowSuccess(wishlistFollow)
          );
        }
      }
    );
  }
}
