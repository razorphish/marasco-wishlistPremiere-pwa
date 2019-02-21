import { MenuService } from './../../services/menu.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { tap, filter, map, switchMap } from 'rxjs/operators';
import { MenuState } from './menu.reducer';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

import * as actions from './menu.actions';

import { NotificationService } from '../../services/notification.service';
import { _daysInMonth } from 'ngx-bootstrap/chronos/utils/date-getters';
import { MenuModel } from '../../models/menu.model';
import { MenuItemService } from '../../services/menuItem.service';


@Injectable()
export class MenuEffects {

    @Effect({ dispatch: false })
    createMenuItem$ = this.actions$.pipe(
        ofType(actions.MenuActionTypes.MenuItemCreateAction),
        tap((data: any) => {
            // Save wishlist in database
            // notify of success
            // go to wishlist page
        })
    );

    @Effect({ dispatch: false })
    deleteMenuItem$ = this.actions$.pipe(
        ofType(actions.MenuActionTypes.MenuItemDeleteAction),
        tap((data: any) => {
            // remove/set status to deleted
            // Notify of success
        })
    );

    @Effect({ dispatch: false })
    menuItemNameChange$ = this.actions$.pipe(
        ofType(actions.MenuActionTypes.MenuItemNameChange),
        tap((data: any) => {
            // Update database
            // Notify
        })
    );

    @Effect()
    menu$ = this.actions$.pipe(
        ofType(actions.MenuActionTypes.MenuChange),
        // tap((data: any) => console.log('Whatup!!')),
        // tap((data: any) => console.log('what', data)),
        switchMap((data: any) => data.payload.menu),
        tap<MenuModel>(_ => (this.menuService.menu = _)),
        map(_ => new actions.MenuPayload(_))
    );

    dispatchError = err => {
        // Notify, if applicable
        this.dispatchErrorNotification(err);
        this.store.dispatch(
            new actions.MenuItemFailure({
                code: err.code,
                message: err.message
            })
        );
    }

    dispatchErrorNotification(error: any) {
        if (!error.code) {
            this.notify('Fatal Error occurred', 'Please contact your administrator', error);
            return;
        }

        switch (error.code) {
            case 'invalid_grant':
                this.notify('Invalid username and/or password', 'Please re-enter your sign in credentials.', ' ');
                break;
            case 11000:
                this.notify('Oops! Error occurred', !!error.errmsg ? error.errmsg : 'Please contact your administrator');
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
        const color = isMessage ? '#739E73' : '#C46A69';
        const icon = isMessage ? 'fa fa-check' : 'fa fa-warning shake animated';

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
        private actions$: Actions,
        private store: Store<MenuState>,
        private menuService: MenuService,
        private _menuItemService: MenuItemService,
        private router: Router,
        private route: ActivatedRoute,
        private _notificationService: NotificationService
    ) {

        // On menu item list changed
        this._menuItemService.onMenuStateChanged.subscribe(menu => {
            if (menu) {
                this.store.dispatch(new actions.MenuChange(menu));
            } else {
                this.menuService.menu = null;
                this.store.dispatch(new actions.NullMenu());
            }
        });
    }
}
