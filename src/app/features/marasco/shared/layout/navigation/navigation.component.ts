import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';
import * as fromWishlist from '@app/features/marasco/core/store/wishlist';
import { LayoutService } from '@app/features/marasco/core/services';
import { Router, ActivatedRoute } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, OnDestroy {
  private subs$ = new SubSink();

  public user: any;
  public wishlists: Wishlist[];

  constructor(
    private _store: Store<fromWishlist.WishlistState>,
    private _router: Router,
    private _route: ActivatedRoute,
    public layoutService: LayoutService
  ) {}

  onClick($event) {
    if (this.layoutService.store.mobileViewActivated) {
      this.layoutService.onCollapseMenu();
    }
  }

  goToFollowing($event) {
    $event.preventDefault();
    this._router.navigateByUrl('/following', { replaceUrl: true });
  }

  ngOnInit() {
    const currentWishlistsState = this._store.pipe(
      select(fromWishlist.getUserWishlists)
    );

    this.subs$.add(
      currentWishlistsState.subscribe((wishlists: Wishlist[]) => {
        if (!!wishlists) {
          this.wishlists = wishlists;
        } else {
          this.wishlists = [];
        }
      })
    );
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

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
