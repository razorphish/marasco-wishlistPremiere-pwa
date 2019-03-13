import { Action } from '@ngrx/store';
import { WishlistActions, WishlistActionTypes } from './wishlist.actions';

export interface WishlistState {
  categories: any;
  wishlists: any;
}

export const wishlistInitialState: WishlistState = {
  wishlists: null,
  categories: null
};

export function wishlistReducer(
  state = wishlistInitialState,
  action: WishlistActions
): WishlistState {
  switch (action.type) {
    case WishlistActionTypes.WishlistPremiereNull:
      return {
        ...state,
        wishlists: null,
        categories: null
      };

    case WishlistActionTypes.WishlistsLoad:
    case WishlistActionTypes.WishlistsRestore:
    case WishlistActionTypes.WishlistsPayload:
      return {
        ...state,
        wishlists: action.payload
      };
    case WishlistActionTypes.CreateWishlistAction:
    case WishlistActionTypes.DeleteWishlistAction:
    case WishlistActionTypes.EditWishlistAction:
      return {
        ...state,
        wishlists: Object.assign({}, action.payload)
      };
    case WishlistActionTypes.WishlistItemCategoriesLoad:
    case WishlistActionTypes.WishlistItemCategoriesRestore:
    case WishlistActionTypes.WishlistItemCategoriesPayload:
      return {
        ...state,
        categories: action.payload
      };
    case WishlistActionTypes.CreateWishlistItemCategoryAction:
      return {
        ...state,
        categories: Object.assign({}, action.payload)
      }

    default:
      return state;
  }
}
