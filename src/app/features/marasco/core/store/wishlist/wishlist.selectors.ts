import * as fromAuth from './wishlist.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getWishlistState = createFeatureSelector<fromAuth.WishlistState>('wishlist');

export const getUserWishlists = createSelector(getWishlistState, (state: fromAuth.WishlistState) => state.wishlists);


