import { Action } from '@ngrx/store';

export enum WishlistActionTypes {
  ///Wishlist Actions
  WishlistsLoad = '[Wishlists] Load wishlists',
  WishlistsRestore = '[Wishlists] Wishlists Restore',
  WishlistsChange = '[Wishlists] Wishlists Change',
  WishlistsPayload = '[Wishlists] Wishlists Payload',
  WishlistsNull = '[Wishlist] Wishlists Null',

  CreateWishlistAction = '[Wishlist] Create Wishlist Action',
  CreateWishlistSuccess = '[Wishlist] Create Wishlist Success',
  DeleteWishlistAction = '[Wishlist] Delete Wishlist Action',
  EditWishlistAction = '[Wishlist] Edit Wishlist Action',

  //Wishlist Item actions
  CreateWishlistItemAction = '[WishlistItem] Create Wishlist Action',
  CreateWishlistItemSuccess = '[WishlistItem] Create Wishlist Success',
  DeleteWishlistItemAction = '[WishlistItem] Delete Wishlist Action',
  EditWishlistItemAction = '[WishlistItem] Edit Wishlist Action',
  SortWishlistItemAction = '[WishlistItem] Sort Wishlist Item Action',
  SortWishlistItemSuccess = '[WishlistItem] Sort Wishlist Success',

  //Wishlist Item Category Actions
  WishlistItemCategoriesLoad = '[WishlistItemCategory] Load Item Categories',
  WishlistItemCategoriesRestore = '[WishlistItemCategory] Wishlist Item Categories Restore',
  WishlistItemCategoriesChange = '[WishlistItemCategory] Wishlists Item Categories Change',
  WishlistItemCategoriesPayload = '[WishlistItemCategory] Wishlists Item Categories Payload',
  WishlistItemCategoriesNull = '[WishlistItemCategory] Wishlist Item Categories Nulll',

  CreateWishlistItemCategoryAction = '[WishlistItemCategory] Create Wishlist Item Category',
  CreateWishlistItemCategorySuccess = '[WishlistItemCategory] Create Wishlist Item Category Success'
}

//==============Wishlist Actions===================///
export class WishlistsLoad implements Action {
  readonly type = WishlistActionTypes.WishlistsLoad;
  constructor(readonly payload: any) {}
}

export class WishlistsRestore implements Action {
  readonly type = WishlistActionTypes.WishlistsRestore;
  constructor(readonly payload: any) {}
}

export class WishlistsChange implements Action {
  readonly type = WishlistActionTypes.WishlistsChange;
  constructor(readonly payload: any) {}
}

export class WishlistsPayload implements Action {
  readonly type = WishlistActionTypes.WishlistsPayload;
  constructor(readonly payload: any) {}
}

export class WishlistsNull implements Action {
  readonly type = WishlistActionTypes.WishlistsNull;
}

export class CreateWishlistAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistAction;
  constructor(readonly payload: any) {}
}

export class CreateWishlistSuccess implements Action {
  readonly type = WishlistActionTypes.CreateWishlistSuccess;
  constructor(readonly payload: any) {}
}

export class DeleteWishlistAction implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistAction;
  constructor(readonly payload: any) {}
}
//==============[END]Wishlist Actions===================///

//==============Wishlist Item Actions===================///
export class CreateWishlistItemAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemAction;
  constructor(readonly payload: any) {}
}

export class CreateWishlistItemSuccess implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemSuccess;
  constructor(readonly payload: any) {}
}

export class DeleteWishlistItemAction implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistItemAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistItemAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistItemAction;
  constructor(readonly payload: any) {}
}

export class SortWishlistItemAction implements Action {
  readonly type = WishlistActionTypes.SortWishlistItemAction;
  constructor(readonly payload: any) {}
}

export class SortWishlistItemSuccess implements Action {
  readonly type = WishlistActionTypes.SortWishlistItemSuccess;
  constructor(readonly payload: any) {}
}


//==============[END] Wishlist Item Actions==============///

//==============Wishlist Item Category Actions===========///
export class WishlistItemCategoriesLoad implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesLoad;
  constructor(readonly payload: any) {}
}

export class WishlistItemCategoriesRestore implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesRestore;
  constructor(readonly payload: any) {}
}

export class WishlistItemCategoriesChange implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesChange;
  constructor(readonly payload: any) {}
}

export class WishlistItemCategoriesPayload implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesPayload;
  constructor(readonly payload: any) {}
}

export class WishlistItemCategoriesNull implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesNull;
}

export class WishlistPremiereNull implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesNull;
}

export class CreateWishlistItemCategoryAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemCategoryAction;
  constructor(readonly payload: any) {}
}

export class CreateWishlistItemCategorySuccess implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemCategorySuccess;
  constructor(readonly payload: any) {}
}
//==============[END] Wishlist Item Category Actions====///

export type WishlistActions =
  //==============Wishlist Actions========================///
  | WishlistsLoad
  | WishlistsRestore
  | WishlistsChange
  | WishlistsPayload
  | WishlistsNull
  | CreateWishlistAction
  | CreateWishlistSuccess
  | DeleteWishlistAction
  | EditWishlistAction
  //==============[END] Wishlist Actions===================///

  //==============Wishlist Item Actions====================///
  | CreateWishlistItemAction
  | CreateWishlistItemSuccess
  | DeleteWishlistItemAction
  | EditWishlistItemAction
  | SortWishlistItemAction
  | SortWishlistItemSuccess
  //==============Wishlist Item Actions====================///

  //==============Wishlist Item Category Actions===========///
  | WishlistItemCategoriesLoad
  | WishlistItemCategoriesRestore
  | WishlistItemCategoriesChange
  | WishlistItemCategoriesPayload
  | WishlistItemCategoriesNull
  | CreateWishlistItemCategoryAction
  | CreateWishlistItemCategorySuccess;
//==============[END] Wishlist Item Category Actions======///
