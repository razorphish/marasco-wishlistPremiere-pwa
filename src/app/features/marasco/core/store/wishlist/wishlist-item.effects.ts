import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { WishlistState } from './wishlist.reducer';
import * as actions from './wishlist.actions';

import { NotificationService } from '@app/features/marasco/core/services/notification.service';
import { _daysInMonth } from 'ngx-bootstrap/chronos/utils/date-getters';
import { WishlistStateService } from '../../services/wishlists.state.service';
import { Wishlist } from '../../interfaces/Wishlist.interface';
import { WishlistItemService } from '../../services/wishlist-item.service';

@Injectable()
export class WishlistItemEffects {
  @Effect({ dispatch: false })
  createWishlistItem$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistItemAction),
    map((data: any) => data.payload),
    tap((wishlistItem: any) => {
      this._wishlistItemService.insert(wishlistItem).subscribe(
        (result: any) => {
          if (!!result.error) {
            this.dispatchErrorNotification(result.error);
            return;
          }

          this.notify(
            'Item Created!',
            'Item has been added to your wishlist.',
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

  sortWishlistItem$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.SortWishlistItemAction),
    map((data: any) => data.payload),
    tap((wishlistItem: any) => {
      this._wishlistItemService.sort(wishlistItem).subscribe(
        (result: any) => {
          if (!!result.error) {
            this.dispatchErrorNotification(result.error);
            return;
          }

          this.notify(
            'Item Created!',
            'Item has been added to your wishlist.',
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

  // @Effect()
  // wishlistItemChange$ = this._actions$.pipe(
  //   ofType(actions.WishlistActionTypes.WishlistItemChange),
  //   switchMap((data: any) => data.payload.getWishlists()),
  //   tap<Wishlist[]>((_) => (this._wishlistStateService.wishlists = _)),
  //   map((_) => new actions.WishlistsPayload(_))
  // );

  @Effect()
  wishlistItemCreateSuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistItemSuccess),
    switchMap((data: any) => this._wishlistStateService.addItem(data.payload)),
    tap<Wishlist[]>((_) => (this._wishlistStateService.wishlists = _)),
    map((_) => new actions.WishlistsPayload(_))
  );

  @Effect()
  wishlistItemSortSuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.SortWishlistItemSuccess),
    switchMap((data: any) => this._wishlistStateService.sortItem(data.payload)),
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
      timeout: 6000
    });
  }

  constructor(
    private _actions$: Actions,
    private _store: Store<WishlistState>,
    private _notificationService: NotificationService,
    private _wishlistStateService: WishlistStateService,
    private _wishlistItemService: WishlistItemService
  ) {
    this._wishlistItemService.onWishlistItemCreated.subscribe((wishlistItem) => {
      if (!!wishlistItem) {
        this._store.dispatch(new actions.CreateWishlistItemSuccess(wishlistItem));
      }
    });
  }
}
