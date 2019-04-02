import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistDetailsResolve } from './wishlist/wishlist-details.resolve';
import { WishlistDetailsComponent } from './wishlist/wishlist-details.component';
import { WishlistListResolve } from './wishlist-list/wishlist-list.resolve';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
import { WishlistsComponent } from './wishlists.component';

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
        path: ':id',
        component: WishlistListComponent,
        data: {
          pageTitle: 'Wishlist'
        },
        resolve:
        { wishlists: WishlistListResolve }
      },
      {
        path: 'list',
        component: WishlistListComponent,
        data: {
          pageTitle: 'List'
        },
        resolve:
        { wishlists: WishlistListResolve }
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistsRoutingModule { }
