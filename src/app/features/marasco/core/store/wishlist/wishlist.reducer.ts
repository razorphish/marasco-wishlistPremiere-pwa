import { Action } from '@ngrx/store';
import { WishlistActions, WishlistActionTypes } from './wishlist.actions';

export interface WishlistState {
  wishlists: any;
}

export const wishlistInitialState: WishlistState = {
  wishlists: null
};

export function wishlistReducer(
  state = wishlistInitialState,
  action: WishlistActions
): WishlistState {
  switch (action.type) {
    case WishlistActionTypes.WishlistsNull:
      return {
        ...state,
        wishlists: null
      };

    case WishlistActionTypes.WishlistsLoad:
    case WishlistActionTypes.WishlistsRestore:
    case WishlistActionTypes.WishlistsPayload:
    case WishlistActionTypes.CreateWishlistAction:
    case WishlistActionTypes.DeleteWishlistAction:
    case WishlistActionTypes.EditWishlistAction:
      return {
        ...state,
        wishlists: action.payload
      };

    default:
      return state;
  }
}
