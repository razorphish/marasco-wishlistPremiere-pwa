import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../store/auth';

@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private _store: Store<fromAuth.AuthState>) {
    }

    canActivate(): Observable<boolean> {

        return this._store.pipe(
            select(fromAuth.getLoggedOnce),
            map(loggedOnce => {
                if (!loggedOnce) {
                    this._store.dispatch(new fromAuth.AppUserInitRedirect('/auth/register'));
                    return false;
                }

                return true;
            }),
            take(1)
        );
    }
}
