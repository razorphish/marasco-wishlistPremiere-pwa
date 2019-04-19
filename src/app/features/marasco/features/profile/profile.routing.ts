import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'profile', pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: './user/user-profile.module#UserProfileModule',
  }
];

export const routing = RouterModule.forChild(routes);
