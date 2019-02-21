import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  MenuInit = '[Menu] Init',
  NullMenu = '[Menu] Null Menu',
  MenuItemCreateAction = '[Menu] Item Create Action',
  MenuItemCreateSuccess = '[Menu] Item Create Success',
  MenuItemDeleteAction = '[Menu] Item Delete Action',
  MenuChange = '[Menu] Change',
  MenuItemNameChange = '[Menu] Item Name Change',
  MenuItemOrderChange = '[Menu] Item Order Change',
  MenuRestore = '[Menu] Restore',
  MenuFirstListCreated = '[Menu] First List Created',
  MenuItemFailure = '[Menu] Item Failure',
  MenuPayload = '[Menu] Items Payload'
}

export class MenuInit implements Action {
  readonly type = MenuActionTypes.MenuInit;
}

export class MenuChange implements Action {
  readonly type = MenuActionTypes.MenuChange;
  // constructor(readonly payload: TokenResult) {}
  constructor(readonly payload: any) { }
}

// Create a new wishlist
export class MenuItemCreateAction implements Action {
  readonly type = MenuActionTypes.MenuItemCreateAction;
  constructor(readonly payload: any) { }
}

export class MenuItemCreateSuccess implements Action {
    readonly type = MenuActionTypes.MenuItemCreateSuccess;
    constructor(readonly payload: any) { }
  }

export class MenuItemDeleteAction implements Action {
  readonly type = MenuActionTypes.MenuItemDeleteAction;
  constructor(readonly payload: any) { }
}

export class MenuItemNameChange implements Action {
  readonly type = MenuActionTypes.MenuItemNameChange;
  constructor(readonly payload: any) { }
}

export class MenuItemOrderChange implements Action {
  readonly type = MenuActionTypes.MenuItemOrderChange;
  constructor(readonly payload: any) { }
}

export class MenuRestore implements Action {
  readonly type = MenuActionTypes.MenuRestore;
  constructor(readonly payload: any) {
    this.payload = { uid: payload.user._id, ...payload };
  }
}

export class MenuFirstListCreated implements Action {
  readonly type = MenuActionTypes.MenuFirstListCreated;
  constructor(readonly payload: boolean) { }
}

export class MenuItemFailure implements Action {
  readonly type = MenuActionTypes.MenuItemFailure;
  constructor(readonly payload: any) { }
}

export class MenuPayload implements Action {
  readonly type = MenuActionTypes.MenuPayload;
  constructor(readonly payload: any) {
    this.payload = { uid: payload.user._id, ...payload };
  }
}

export class NullMenu implements Action {
  readonly type = MenuActionTypes.NullMenu;
}


export type MenuActions =
  | MenuInit
  | NullMenu
  | MenuItemCreateAction
  | MenuItemCreateSuccess
  | MenuItemDeleteAction
  | MenuChange
  | MenuItemNameChange
  | MenuItemOrderChange
  | MenuRestore
  | MenuFirstListCreated
  | MenuItemFailure
  | MenuPayload;
