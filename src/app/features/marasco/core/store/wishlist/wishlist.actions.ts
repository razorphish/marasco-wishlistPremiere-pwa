import { Action } from '@ngrx/store';

export enum WishlistActionTypes {
  WishlistsLoad = '[Wishlist] Load wishlists',
  WishlistsRestore = '[Wishlist] Wishlists Restore',
  WishlistsChange = '[Wishlist] Wishlists Change',
  WishlistsPayload = '[Wishlist] Wishlists Payload',
  WishlistsNull = '[Wishlist] Null Wishlists',
  CreateWishlistAction = '[Wishlist] Create Wishlist Action',
  DeleteWishlistAction = '[Wishlist] Delete Wishlist Action',
  EditWishlistAction = '[Wishlist] Edit Wishlist Action'
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

export class DeleteWishlistAction implements Action {
  readonly type = WishlistActionTypes.DeleteWishlistAction;
  constructor(readonly payload: any) {}
}

export class EditWishlistAction implements Action {
  readonly type = WishlistActionTypes.EditWishlistAction;
  constructor(readonly payload: any) {}
}

export type WishlistActions =
  | WishlistsLoad
  | WishlistsRestore
  | WishlistsChange
  | WishlistsPayload
  | WishlistsNull
  | CreateWishlistAction
  | DeleteWishlistAction
  | EditWishlistAction;