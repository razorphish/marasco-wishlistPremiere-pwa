import * as fromMenu from './menu.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';


export const getMenuState = createFeatureSelector<fromMenu.MenuState>('menu');


export const getMenuItems = createSelector(getMenuState, (state: fromMenu.MenuState) => state.items);


