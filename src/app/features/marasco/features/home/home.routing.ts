import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'landing', pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: './landing/landing.module#LandingModule',

  }
];

export const routing = RouterModule.forChild(routes);
