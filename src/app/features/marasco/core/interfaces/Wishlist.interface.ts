import { WishlistPreference } from './Wishlist-Preference.interface'
import { WishlistItem } from './Wishlist-item.interface';

export interface Wishlist {
    _id?: string;
    name: string;
    userId?: any;
    preferences?: WishlistPreference;
    statusId?: string;
    privacy?: string;
    dateCreated?: Date;
    dateModified?: Date;
    shares?: any;
    notifications?: any;
    items?: WishlistItem[];
}
