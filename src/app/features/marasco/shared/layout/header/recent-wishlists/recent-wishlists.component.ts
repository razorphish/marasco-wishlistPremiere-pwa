import { Component, OnInit } from '@angular/core';
import { RecentWishlistsService } from "./recent-wishlists.service";

@Component({
  selector: 'sa-recent-wishlists',
  templateUrl: './recent-wishlists.component.html',
  providers: [RecentWishlistsService]
})
export class RecentWishlistsComponent implements OnInit {

  wishlists: Array<any>;

  constructor(private wishlistService: RecentWishlistsService) {

  }

  ngOnInit() {
    this.wishlists = this.wishlistService.getWishlists();
  }

  clearWishlists() {
    this.wishlistService.clearWishlists();
    this.wishlists = this.wishlistService.getWishlists();
  }

}
