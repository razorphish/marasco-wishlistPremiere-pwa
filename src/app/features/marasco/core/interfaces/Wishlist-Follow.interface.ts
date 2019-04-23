import { NotificationKey } from './Notification-Key.interface';
import { Wishlist } from './Wishlist.interface';


export interface WishlistFollow {
  _id?: string;
  userId?: string;
  wishlistId: any;
  notifiedOnAddItem?: boolean;
  notifiedOnRemoveItem?: boolean;
  notifyOnCompletion?: boolean;
  endpoint?: string;
  expirationTime?: string;
  keys?: NotificationKey;
  device?: any;
  dateCreated?: Date;
  dateModified?: Date;
  wishlist?: Wishlist
}
