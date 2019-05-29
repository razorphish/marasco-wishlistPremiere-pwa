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
  DeleteWishlistSuccess = '[Wishlist] Delete Wishlist Success',
  EditWishlistAction = '[Wishlist] Edit Wishlist Action',
  EditWishlistSuccess = '[Wishlist] Edit Wishlist Success',

  //Wishlist Item actions
  CreateWishlistItemAction = '[WishlistItem] Create Wishlist Item Action',
  CreateWishlistItemSuccess = '[WishlistItem] Create Wishlist Item Success',
  DeleteWishlistItemAction = '[WishlistItem] Delete Wishlist Item Action',
  DeleteWishlistItemSuccess = '[WishlistItem] Delete Wishlist Item Success',
  EditWishlistItemAction = '[WishlistItem] Edit Wishlist Item Action',
  EditWishlistItemSuccess = '[WishlistItem] Edit Wishlist Item Success',
  SortWishlistItemAction = '[WishlistItem] Sort Wishlist Item Action',
  SortWishlistItemSuccess = '[WishlistItem] Sort Wishlist Item Success',

  //Wishlist Follow actions
  WishlistFollowLoad = '[WishlistFollow] Load User wishlist follows',
  WishlistFollowRestore = '[WishlistFollow] User Wishlist Follows Restore',
  WishlistFollowChange = '[WishlistFollow] User Wishlist Follows Change',
  WishlistFollowPayload = '[WishlistFollow] User Wishlist Follows Payload',
  WishlistFollowNull = '[WishlistFollow] User Wishlist Follows Null',

  CreateWishlistFollowAction = '[WishlistFollow] Create Wishlist Follow Action',
  CreateWishlistFollowSuccess = '[WishlistFollow] Create Wishlist Follow Success',
  DeleteWishlistFollowAction = '[WishlistFollow] Delete Wishlist Follow Action',
  DeleteWishlistFollowSuccess = '[WishlistFollow] Delete Wishlist Follow Success',
  EditWishlistFollowAction = '[WishlistFollow] Edit Wishlist Follow Action',
  EditWishlistFollowSuccess = '[WishlistFollow] Edit Wishlist Follow Success',

  //Wishlist Item Category Actions
  WishlistItemCategoriesLoad = '[WishlistItemCategory] Load Item Categories',
  WishlistItemCategoriesRestore = '[WishlistItemCategory] Wishlist Item Categories Restore',
  WishlistItemCategoriesChange = '[WishlistItemCategory] Wishlists Item Categories Change',
  WishlistItemCategoriesPayload = '[WishlistItemCategory] Wishlists Item Categories Payload',
  WishlistItemCategoriesNull = '[WishlistItemCategory] Wishlist Item Categories Null',
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

export class DeleteWishlistSuccess implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistSuccess;
  constructor(readonly payload: any) {}
}

export class EditWishlistAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistSuccess implements Action {
  readonly type = WishlistActionTypes.EditWishlistSuccess;
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

export class DeleteWishlistItemSuccess implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistItemSuccess;
  constructor(readonly payload: any) {}
}

export class EditWishlistItemAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistItemAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistItemSuccess implements Action {
  readonly type = WishlistActionTypes.EditWishlistItemSuccess;
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

//==============Wishlist Follow Actions===================///
export class WishlistFollowLoad implements Action {
  readonly type = WishlistActionTypes.WishlistFollowLoad;
  constructor(readonly payload: any) {}
}

export class WishlistFollowRestore implements Action {
  readonly type = WishlistActionTypes.WishlistFollowRestore;
  constructor(readonly payload: any) {}
}

export class WishlistFollowChange implements Action {
  readonly type = WishlistActionTypes.WishlistFollowChange;
  constructor(readonly payload: any) {}
}

export class WishlistFollowPayload implements Action {
  readonly type = WishlistActionTypes.WishlistFollowPayload;
  constructor(readonly payload: any) {}
}

export class WishlistFollowNull implements Action {
  readonly type = WishlistActionTypes.WishlistFollowNull;
}

export class CreateWishlistFollowAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistFollowAction;
  constructor(readonly payload: any) {}
}

export class CreateWishlistFollowSuccess implements Action {
  readonly type = WishlistActionTypes.CreateWishlistFollowSuccess;
  constructor(readonly payload: any) {}
}

export class DeleteWishlistFollowAction implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistFollowAction;
  constructor(readonly payload: any) {}
}

export class DeleteWishlistFollowSuccess implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistFollowSuccess;
  constructor(readonly payload: any) {}
}

export class EditWishlistFollowAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistFollowAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistFollowSuccess implements Action {
  readonly type = WishlistActionTypes.EditWishlistFollowSuccess;
  constructor(readonly payload: any) {}
}

//==============[END] Wishlist Follow Actions==============///

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

export class CreateWishlistItemCategoryAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemCategoryAction;
  constructor(readonly payload: any, done: any) {}
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
  | DeleteWishlistSuccess
  | EditWishlistAction
  | EditWishlistSuccess
  //==============[END] Wishlist Actions===================///

  //==============Wishlist Item Actions====================///
  | CreateWishlistItemAction
  | CreateWishlistItemSuccess
  | DeleteWishlistItemAction
  | DeleteWishlistItemSuccess
  | EditWishlistItemAction
  | EditWishlistItemSuccess
  | SortWishlistItemAction
  | SortWishlistItemSuccess
  //==============Wishlist Item Actions====================///

  //==============Wishlist Follow Actions====================///
  | WishlistFollowLoad
  | WishlistFollowRestore
  | WishlistFollowChange
  | WishlistFollowPayload
  | WishlistFollowNull
  | CreateWishlistFollowAction
  | CreateWishlistFollowSuccess
  | DeleteWishlistFollowAction
  | DeleteWishlistFollowSuccess
  | EditWishlistFollowAction
  | EditWishlistFollowSuccess
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
