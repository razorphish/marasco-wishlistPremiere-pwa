import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
  loading: boolean;
  error: any;
  user: any;
  logged: boolean;
  loggedOnce: boolean;
  wishlists: any
}

export const authInitialState: AuthState = {
  loading: false,
  error: null,
  user: null,
  logged: false,
  loggedOnce: false,
  wishlists: null
};

export function authReducer(
  state = authInitialState,
  action: AuthActions
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
    case AuthActionTypes.SignupAction:
    case AuthActionTypes.SignupMobileAction:
    case AuthActionTypes.GoogleSign:
    case AuthActionTypes.LinkedInSign:
    case AuthActionTypes.FacebookSign:
    case AuthActionTypes.MobileSign:
      return {
        ...state,
        loading: true
      };

    case AuthActionTypes.LogoutAction:
    case AuthActionTypes.NullWishlists:
    case AuthActionTypes.NullToken:
      return {
        ...state,
        loading: false,
        error: null,
        user: null,
        logged: false,
        wishlists: null
      };

    case AuthActionTypes.LoggedOnce:
      return {
        ...state,
        loggedOnce: action.payload
      };

    case AuthActionTypes.AuthTokenPayload:
    case AuthActionTypes.TokenRefreshSuccess:
    case AuthActionTypes.TokenRestore:
      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
        logged: true
      };

    case AuthActionTypes.AuthFailure:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
        logged: false
      };

    case AuthActionTypes.LoadWishlists:
      return {
        ...state,
        wishlists: action.payload
      };

    case AuthActionTypes.WishlistsRestore:
    case AuthActionTypes.WishlistsPayload:
      return {
        ...state,
        wishlists: action.payload
      };

    default:
      return state;
  }
}
