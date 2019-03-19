import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';

import { environment } from '../../../../../environments/environment';

import * as auth from './auth';
import * as notify from './notify';
import * as profile from './profile';
import * as layout from './layout';
import * as menu from './menu';
import * as wishlist from './wishlist';

export interface AppState {
  auth: auth.AuthState;
  notify: notify.NotifyState;
  profile: profile.ProfileState;
  layout: layout.LayoutState;
  menu: menu.MenuState;
  wishlist: wishlist.WishlistState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: auth.authReducer,
  notify: notify.notifyReducer,
  profile: profile.profileReducer,
  layout: layout.layoutReducer,
  menu: menu.menuReducer,
  wishlist: wishlist.wishlistReducer
};

// console.log all actions
export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    if (
      // !action.silent &&
      environment.log.store
    ) {
      console.log('\nstate', state);
      console.log('+ action', action);
    }

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

export const effects = [
  auth.AuthEffects,
  notify.NotifyEffects,
  profile.ProfileEffects,
  layout.LayoutEffects,
  menu.MenuEffects,
  wishlist.WishlistEffects,
  wishlist.WishlistItemEffects,
  wishlist.WishlistItemCategoryEffects
];

export const services = [notify.NotifyService];
