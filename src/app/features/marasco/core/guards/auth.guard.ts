import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import * as fromAuth from '../store/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _store: Store<fromAuth.AuthState>) {}

  canActivate(): Observable<boolean> {
    // return this.store.pipe(
    //   select(fromAuth.getLoggedIn),
    //   map(authed => {
    //     if (!authed) {
    //       this.store.dispatch(new fromAuth.LoginRedirect('/home/landing'));
    //       return false;
    //     }

    //     return true;
    //   }),
    //   take(1)
    // );
    return combineLatest(
      this._store.pipe(
        select(fromAuth.getLoggedIn),
        map((authed) => {
          if (!authed) {
            //this._store.dispatch(new fromAuth.LoginRedirect('/home/landing'));
            return false;
          }

          return true;
        }),
        take(1)
      ),
      this._store.pipe(
        select(fromAuth.getLoggedOnce),
        map((loggedOnce) => {
          if (!loggedOnce) {
            //this._store.dispatch(new fromAuth.AppUserInitRedirect('/auth/register'));
            return false;
          }

          return true;
        }),
        take(1)
      )
    ).pipe(
      map(([isLogged, hasLoggedIn]) => {
        if (!hasLoggedIn) {
          this._store.dispatch(
            new fromAuth.AppUserInitRedirect('/auth/register')
          );
          return false;
        }

        if (!isLogged) {
          this._store.dispatch(new fromAuth.LoginRedirect('/home/landing'));
          return false;
        }

        return true;

      }),
      take(1)
    );
  }
}
