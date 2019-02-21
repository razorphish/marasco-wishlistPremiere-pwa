import { MenuItem } from './../../interfaces/Menu.interface';
import { Action } from '@ngrx/store';
import { MenuActions, MenuActionTypes } from './menu.actions';

export interface MenuState {
    items: MenuItem[];
    menuFirstListCreated: boolean;
}

export const menuInitialState: MenuState = {
    items: null,
    menuFirstListCreated: false
};

export function menuReducer(
    state = menuInitialState,
    action: MenuActions
): MenuState {
    switch (action.type) {

        case MenuActionTypes.MenuFirstListCreated:
            return {
                ...state,
                menuFirstListCreated: action.payload
            };

        case MenuActionTypes.NullMenu:
            return {
                ...state,
                items: null,
                menuFirstListCreated: false
            };

        case MenuActionTypes.MenuItemCreateAction:
        case MenuActionTypes.MenuItemCreateSuccess:
        case MenuActionTypes.MenuItemDeleteAction:
        case MenuActionTypes.MenuItemNameChange:
        case MenuActionTypes.MenuItemOrderChange:
        case MenuActionTypes.MenuRestore:
        case MenuActionTypes.MenuChange:
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
}
