export interface WishlistFollow {
  _id?: string;
  wishlistId: string;
  notifiedOnAddItem?: boolean;
  notifiedOnRemoveItem?: boolean;
  notifyOnCompletion?: boolean;
  dateCreated?: Date;
  dateModified?: Date;
}
