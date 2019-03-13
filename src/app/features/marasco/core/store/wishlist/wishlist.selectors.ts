import * as fromWishlistPremiere from './wishlist.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getWishlistState = createFeatureSelector<fromWishlistPremiere.WishlistState>('wishlist');

export const getUserWishlists = createSelector(getWishlistState, (state: fromWishlistPremiere.WishlistState) => state.wishlists);
export const getUserWishlistCategories = createSelector(getWishlistState, (state: fromWishlistPremiere.WishlistState) => state.categories);


