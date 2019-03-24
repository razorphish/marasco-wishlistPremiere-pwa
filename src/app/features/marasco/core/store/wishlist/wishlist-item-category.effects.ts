import { WishlistItemCategoryService } from './../../services/wishlist-item-category.service';
import { WishlistItemCategory } from './../../interfaces/Wishlist-item-category.interface';
import { WishlistItemCategoriesStateService } from '../../services/wishlist-item-categories.state.service';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, map, switchMap, delay } from 'rxjs/operators';

import { WishlistState } from './wishlist.reducer';
import { AuthService } from '../../services/auth.service';
import * as actions from './wishlist.actions';

import { NotificationService } from '@app/features/marasco/core/services/notification.service';

/**
 * These effects will require a delay if we are updating the storage db
 */
@Injectable()
export class WishlistItemCategoryEffects {
  @Effect()
  wishlistItemCategoriesChange$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.WishlistItemCategoriesChange),
    delay(1000),
    switchMap((data: any) => data.payload.getWishlistItemCategories()),
    tap<WishlistItemCategory[]>(
      (_) =>
        (this._wishlistItemCategoriesStateService.wishlistItemCategories = _)
    ),
    map((_) => new actions.WishlistItemCategoriesPayload(_))
  );

  @Effect({ dispatch: false })
  wishlistItemCategoriesNull$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.WishlistItemCategoriesNull),
    delay(1000),
    tap<WishlistItemCategory[]>(
      () =>
        (this._wishlistItemCategoriesStateService.wishlistItemCategories = null)
    )
  );

  @Effect({ dispatch: false })
  itemCategoryCreate$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistItemCategoryAction),
    map((data: any) => data.payload),
    tap((category: WishlistItemCategory) => {
      this._wishlistItemCategoryService.insert(category).subscribe(
        (result: any) => {
          if (!!result.error) {
            this.dispatchErrorNotification(result.error);
            return;
          }

          this.notify(
            'Category Created!',
            'Category has been added to available list of options.',
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

  @Effect()
  createWishlistItemCategorySuccess$ = this._actions$.pipe(
    ofType(actions.WishlistActionTypes.CreateWishlistItemCategorySuccess),
    switchMap((data: any) =>
      this._wishlistItemCategoriesStateService.add(data.payload)
    ),
    tap<WishlistItemCategory[]>(
      (_) =>
        (this._wishlistItemCategoriesStateService.wishlistItemCategories = _)
    ),
    map((_) => new actions.WishlistItemCategoriesPayload(_))
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
    private _auth: AuthService,
    private _notificationService: NotificationService,
    private _wishlistItemCategoriesStateService: WishlistItemCategoriesStateService,
    private _wishlistItemCategoryService: WishlistItemCategoryService
  ) {
    //Login, Logout
    this._auth.onAuthStateChanged.subscribe((user) => {
      if (!!user) {
        this._store.dispatch(new actions.WishlistItemCategoriesChange(user));
      } else {
        this._store.dispatch(new actions.WishlistItemCategoriesNull());
      }
    });

    this._wishlistItemCategoryService.onWishlistItemCategoryCreated.subscribe(
      (wishlistCategory) => {
        if (!!wishlistCategory) {
          this._store.dispatch(
            new actions.CreateWishlistItemCategorySuccess(wishlistCategory)
          );
        }
      }
    );
  }
}
