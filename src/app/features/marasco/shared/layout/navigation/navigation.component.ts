import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  public user:any;
  public wishlists: Wishlist[];

  constructor(
    private _store: Store<fromWishlist.WishlistState>
  ) {
  }

  ngOnInit() {
    const currentWishlistsState = this._store.pipe(select(fromWishlist.getUserWishlists));
    currentWishlistsState.subscribe((wishlists: Wishlist[]) => {
      this.wishlists = wishlists;
    });
  }

  isInRole(role) {
    let foundRole = false;

    for (let i = 0; i < this.user.roles.length; i++) {
      if (this.user.roles[i].normalizedName === role) {
        foundRole = true;
      }
    }

    return foundRole;
  }
}
