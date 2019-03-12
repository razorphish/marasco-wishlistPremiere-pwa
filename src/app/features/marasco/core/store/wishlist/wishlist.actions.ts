import { Action } from '@ngrx/store';

export enum WishlistActionTypes {
  WishlistsLoad = '[Wishlist] Load wishlists',
  WishlistsRestore = '[Wishlist] Wishlists Restore',
  WishlistsChange = '[Wishlist] Wishlists Change',
  WishlistsPayload = '[Wishlist] Wishlists Payload',
  WishlistsNull = '[Wishlist] Null Wishlists',

  CreateWishlistAction = '[Wishlist] Create Wishlist Action',
  CreateWishlistSuccess = '[Wishlist] Create Wishlist Success',
  DeleteWishlistAction = '[Wishlist] Delete Wishlist Action',
  EditWishlistAction = '[Wishlist] Edit Wishlist Action',

  WishlistItemCategoriesLoad = '[Wishlist] Load Item Categories',
  WishlistItemCategoriesRestore = '[Wishlist] Wishlist Item Categories Restore',
  WishlistItemCategoriesChange = '[Wishlist] Wishlists Item Categories Change',
  WishlistItemCategoriesPayload = '[Wishlist] Wishlists Item Categories Payload',
  WishlistItemCategoriesNull = '[Wishlist] Null Wishlist Item Categories'
}

export class WishlistsLoad implements Action {
  readonly type = WishlistActionTypes.WishlistsLoad;
  constructor(readonly payload: any) {}
}

export class WishlistsNull implements Action {
  readonly type = WishlistActionTypes.WishlistsNull;
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

///Wishlist Categories /////
export class WishlistItemCategoriesLoad implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesLoad;
  constructor(readonly payload: any) {}
}

export class WishlistItemCategoriesNull implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesNull;
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

export type WishlistActions =
  | WishlistsLoad
  | WishlistsRestore
  | WishlistsChange
  | WishlistsPayload
  | WishlistsNull
  | WishlistItemCategoriesLoad
  | WishlistItemCategoriesRestore
  | WishlistItemCategoriesChange
  | WishlistItemCategoriesPayload
  | WishlistItemCategoriesNull
  | CreateWishlistAction
  | CreateWishlistSuccess
  | DeleteWishlistAction
  | EditWishlistAction;
