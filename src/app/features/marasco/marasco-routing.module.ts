import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { AuthGuard } from './core/guards/auth.guard';
import { AppGuard } from './core/guards/app.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: { pageTitle: 'Home' },
    children: [
      {
        path: "",
        redirectTo: "home/landing",
        pathMatch: "full"
      },
      {
        path: "home", //home
        loadChildren: "./features/home/home.module#HomeModule",
        data: { pageTitle: "Wishlist Premiere" },
        canActivate: [AppGuard]
      },

      {
        path: "wishlistPremiere",
        loadChildren: "./features/wishlistPremiere/wishlistPremiere.module#WishlistPremiereModule",
        data: { pageTitle: "Wishlist" },
        canActivate: [AuthGuard]
      },

      {
        path: "profile",
        loadChildren: "./features/profile/profile.module#ProfileModule",
        data: { pageTitle: "User Profile" },
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class MarascoRoutingModule { }
