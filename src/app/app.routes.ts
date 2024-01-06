import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./domains/info/pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
