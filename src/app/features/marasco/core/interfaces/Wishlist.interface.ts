import { WishlistFollow } from './Wishlist-Follow.interface';
import { WishlistPreference } from './Wishlist-Preference.interface';
import { WishlistItem } from './Wishlist-item.interface';

export interface Wishlist {
  _id?: string;
  follows?: WishlistFollow[];
  dateCreated?: Date;
  dateModified?: Date;
  items?: WishlistItem[];
  name: string;
  notifications?: any;
  preferences?: WishlistPreference;
  privacy?: string;
  shares?: any;
  statusId?: string;
  userId?: any;
}
