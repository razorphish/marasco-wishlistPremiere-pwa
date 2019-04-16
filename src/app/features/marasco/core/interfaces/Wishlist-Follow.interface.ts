import { NotificationKey } from './Notification-Key.interface';


export interface WishlistFollow {
  _id?: string;
  userId?: string;
  wishlistId: string;
  notifiedOnAddItem?: boolean;
  notifiedOnRemoveItem?: boolean;
  notifyOnCompletion?: boolean;
  endpoint?: string;
  expirationTime?: string;
  keys?: NotificationKey;
  device?: any;
  dateCreated?: Date;
  dateModified?: Date;
}
