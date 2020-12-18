import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './core/layouts/wrapper/wrapper.component';
import { PrivateGuard } from './shared/guards/private.guard';
import { OnlyAdminGuard } from './shared/guards/only-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListModule)
      },
      {
        canActivate: [PrivateGuard],
        path: 'edit-product/:id',
        loadChildren: () => import('./pages/edit-product/edit-product.module').then(m => m.EditProductModule)
      },
      {
        canActivate: [OnlyAdminGuard],
        path: 'new-product',
        loadChildren: () => import('./pages/new-product/new-product.module').then(m => m.NewProductModule)
      },
      {
        path: '**',
        redirectTo: 'product-list'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
