import { Injectable } from '@angular/core';

@Injectable()
export class RecentWishlistsService {
  wishlists: any;

  constructor() {
    this.wishlists = [
      {
        "href": "/",
        "title": "Online e-merchant management system - attaching integration with the iOS"
      },
      {
        "href": "/",
        "title": "Notes on pipeline upgradee"
      },
      {
        "href": "/",
        "title": "Assesment Report for merchant account"
      }
    ]

  }

  getWishlists() {
    return this.wishlists;
  }

  clearWishlists() {
    this.wishlists = [];
  }

}
