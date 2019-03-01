import { Action } from '@ngrx/store';
import { LayoutActions, LayoutActionTypes } from './layout.actions';

export interface LayoutState {
  isMobile: boolean;
}

export const initialLayoutState: LayoutState = {
  isMobile: false
};

export function layoutReducer(state = initialLayoutState, action: LayoutActions): LayoutState {
  switch (action.type) {

    default:
      return state;
  }
}
