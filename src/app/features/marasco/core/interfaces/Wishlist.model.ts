import { Wishlist } from './Wishlist.interface';

export const DefaultWishlist: Wishlist = {
  _id: null,
  name: null
};

export function createWishlist(data): Wishlist {
  return {
    _id: data.uid || data.user_id || DefaultWishlist._id,
    name: data.displayName || data.name || DefaultWishlist.name
  };
}
