import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistDetailsResolve } from './wishlist-details/wishlist-details.resolve';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';
import { WishlistListResolve } from './wishlist-list/wishlist-list.resolve';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistResolve } from './wishlist/wishlist.resolve';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistsComponent } from './wishlists.component';
import { WishlistFollowingResolve } from './wishlist-following/wishlist-following.resolve';
import { WishlistFollowingComponent } from './wishlist-following/wishlist-following.component';

export const routes: Routes = [
  {
    path: '',
    component: WishlistsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'following',
        component: WishlistFollowingComponent,
        data: {
          pageTitle: 'Following'
        },
       resolve: { wishlists: WishlistFollowingResolve }
      },
      {
        path: 'list',
        component: WishlistListComponent,
        data: {
          pageTitle: 'List'
        },
        resolve: { wishlists: WishlistListResolve }
      },
      {
        path: 'details/:id',
        component: WishlistDetailsComponent,
        data: {
          pageTitle: 'Details'
        },
        resolve: {
          wishlist: WishlistDetailsResolve
        }
      },
      {
        path: ':id',
        pathMatch: 'full',
        component: WishlistComponent,
        data: {
          pageTitle: 'Wishlist'
        },
        resolve: { wishlist: WishlistResolve }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistsRoutingModule {}
