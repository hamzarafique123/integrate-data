import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'eight-one',
    pathMatch: 'full',
  },
  {
    path: 'eight-one',
    loadComponent: () => import('./eight-one/eight-one.page').then( m => m.EightOnePage)
  },
  {
    path: 'ten-one',
    loadComponent: () => import('./ten-one/ten-one.page').then( m => m.TenOnePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.page').then( m => m.CartPage)
  },
];
