import { Injectable } from '@angular/core';

import { Wishlist } from '../interfaces/Wishlist.interface';

@Injectable()
export class WishlistFactory {
  ////////// Private variables//////////
  // private _Wishlist: Wishlist;

  //////////Publicly exposed properties//////////

  //////////Constructor//////////
  /**
   * These should be singleton objects
   */
  constructor() {}

  public validate(
    Wishlist: Wishlist,
    callback?: (errors: string[]) => void
  ): boolean {
    const errors: string[] = [];

    if (!Wishlist) {
      throw new Error('Wishlist Object Missing...');
    }

    //Check for required properties
    if (!Wishlist.userId) {
      errors.push('Please enter a userId');
    }

    if (!Wishlist.name) {
      errors.push('Please enter a wishlist name');
    }

    // Only check on updated obects
    if (Wishlist._id) {
      if (!Wishlist.dateCreated) {
        errors.push('Date Created not set');
      }
    }

    // Set errors
    if (errors.length > 0) {
      if (callback) {
        callback(errors);
      }
      return false;
    } else {
      return true;
    }
  }
}
