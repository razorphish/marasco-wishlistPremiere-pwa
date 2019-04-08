import { WishlistActions, WishlistActionTypes } from './wishlist.actions';

export interface WishlistState {
  categories: any;
  wishlists: any;
  follows: any;
}

export const wishlistInitialState: WishlistState = {
  wishlists: null,
  categories: null,
  follows: null
};

export function wishlistReducer(
  state = wishlistInitialState,
  action: WishlistActions
): WishlistState {
  switch (action.type) {
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
    // User wishlist Categories
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
      };
    // User wishlist follows
    case WishlistActionTypes.WishlistFollowLoad:
    case WishlistActionTypes.WishlistFollowRestore:
    case WishlistActionTypes.WishlistFollowPayload:
      return {
        ...state,
        follows: action.payload
      };
    case WishlistActionTypes.CreateWishlistFollowAction:
      return {
        ...state,
        follows: Object.assign({}, action.payload)
      };

    default:
      return state;
  }
}
