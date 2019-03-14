import { Action } from '@ngrx/store';

export enum WishlistActionTypes {

  WishlistsLoad = '[Wishlists] Load wishlists',
  WishlistsRestore = '[Wishlists] Wishlists Restore',
  WishlistsChange = '[Wishlists] Wishlists Change',
  WishlistsPayload = '[Wishlists] Wishlists Payload',
  WishlistsNull = '[Wishlist] Wishlists Null',

  CreateWishlistAction = '[Wishlist] Create Wishlist Action',
  CreateWishlistSuccess = '[Wishlist] Create Wishlist Success',
  DeleteWishlistAction = '[Wishlist] Delete Wishlist Action',
  EditWishlistAction = '[Wishlist] Edit Wishlist Action',

  WishlistItemCategoriesLoad = '[WishlistItemCategory] Load Item Categories',
  WishlistItemCategoriesRestore = '[WishlistItemCategory] Wishlist Item Categories Restore',
  WishlistItemCategoriesChange = '[WishlistItemCategory] Wishlists Item Categories Change',
  WishlistItemCategoriesPayload = '[WishlistItemCategory] Wishlists Item Categories Payload',
  WishlistItemCategoriesNull = '[WishlistItemCategory] Wishlist Item Categories Nulll',

  CreateWishlistItemCategoryAction = '[WishlistItemCategory] Create Wishlist Item Category',
  CreateWishlistItemCategorySuccess = '[WishlistItemCategory] Create Wishlist Item Category Success'
}

export class WishlistsLoad implements Action {
  readonly type = WishlistActionTypes.WishlistsLoad;
  constructor(readonly payload: any) {}
}

export class WishlistsNull implements Action {
  readonly type = WishlistActionTypes.WishlistsNull;
}

export class WishlistItemCategoriesNull implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesNull;
}

export class WishlistPremiereNull implements Action {
  readonly type = WishlistActionTypes.WishlistItemCategoriesNull;
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

export class CreateWishlistItemCategoryAction implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemCategoryAction;
  constructor(readonly payload: any) {}
}

export class CreateWishlistItemCategorySuccess implements Action {
  readonly type = WishlistActionTypes.CreateWishlistItemCategorySuccess;
  constructor(readonly payload: any) {}
}

export type WishlistActions =
  | WishlistsLoad
  | WishlistsRestore
  | WishlistsChange
  | WishlistsPayload
  | WishlistsNull
  | WishlistItemCategoriesNull
  | WishlistItemCategoriesLoad
  | WishlistItemCategoriesRestore
  | WishlistItemCategoriesChange
  | WishlistItemCategoriesPayload
  | CreateWishlistAction
  | CreateWishlistSuccess
  | DeleteWishlistAction
  | EditWishlistAction
  | CreateWishlistItemCategoryAction
  | CreateWishlistItemCategorySuccess;
