import { WishlistFollow } from '@app/features/marasco/core/interfaces/Wishlist-Follow.interface';
import { WishlistItemCategory } from './../interfaces/Wishlist-item-category.interface';
import { Wishlist } from './../interfaces/Wishlist.interface';
import { User } from '../interfaces/UserInfo.interface';
import { Address } from './address.model';
import { Role } from './role.model';
import { TokenModel } from './token.model';
import { UserNotification } from '../interfaces/User-Notification.interface';
import { DeviceInfo } from '@capacitor/core';

// https://stackoverflow.com/questions/14142071/typescript-and-field-initializers
export class UserInfo implements User {
  _id: string;
  avatar?: string;
  email: string;
  firstName: string;
  homePhone?: string;
  lastName: string;
  username: string;
  refreshToken?: any;
  addresses?: Address[];
  roles?: Role[];
  facebook?: string;
  twitter?: string;
  instagram?: string;
  dateCreated?: Date;
  displayName?: string = `@${this.username}`;
  token?: TokenModel;
  status?: string;
  colo?: string; //colocation (native, mobile, web)
  wishlists?: Wishlist[];
  wishlistItemCategories?: WishlistItemCategory[];
  wishlistFollows?: WishlistFollow[];
  notifications?: UserNotification[];
  devices?: DeviceInfo[];
  //updatedExisting?: boolean;
  // constructor(init? : {
  //     _id: string; avatar?: string,
  //     email: string,
  //     firstName: string,
  //     homePhone?: string,
  //     lastName: string,
  //     username: string,
  //     refreshToken?: any,
  //     addresses?: Address[],
  //     roles?: Role[],
  //     facebook?: string,
  //     twitter?: string,
  //     instagram?: string,
  //     dateCreated?: Date
  // }){
  //     if (init) Object.assign(this, init);
  // }

  constructor(init?: Partial<UserInfo>) {
    if (init) Object.assign(this, init);
  }

  getIdToken() {
    return new Promise((resolve) => {
      resolve(this.token);
    });
  }

  getWishlists() {
    return new Promise((resolve) => {
      resolve(this.wishlists);
    });
  }

  getWishlistItemCategories() {
    return new Promise((resolve) => {
      resolve(this.wishlistItemCategories);
    });
  }

  getWishlistFollows() {
    return new Promise((resolve) => {
      resolve(this.wishlistFollows);
    });
  }
}
