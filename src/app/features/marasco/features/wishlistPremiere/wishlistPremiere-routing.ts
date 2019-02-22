import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'wishlists',
    pathMatch: 'full'
  },
  {
    path: 'wishlists',
    loadChildren: './wishlists/wishlists.module#WishlistsModule',
    data: { pageTitle: 'Wishlist' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class routing { }
