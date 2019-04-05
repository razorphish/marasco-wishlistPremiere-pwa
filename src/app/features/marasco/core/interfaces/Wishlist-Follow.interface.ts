export interface WishlistFollow {
  _id?: string;
  userId?: string;
  wishlistId: string;
  notifiedOnAddItem?: boolean;
  notifiedOnRemoveItem?: boolean;
  notifyOnCompletion?: boolean;
  dateCreated?: Date;
  dateModified?: Date;
}
