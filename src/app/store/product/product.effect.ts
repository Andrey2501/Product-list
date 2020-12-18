import { BackendService } from '../../backend/backend.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import {
  AddProduct, AddProductSuccess,
  LoadProducts,
  LoadProductsSuccess,
  RemoveProduct,
  RemoveProductSuccess,
  UpdateProduct,
  UpdateProductSuccess
} from './product.action';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly backendService: BackendService,
    private readonly store: Store,
    private readonly router: Router) {
  }
  public loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadProducts),
    mergeMap(({props}) => {
      return this.backendService.productService.getProducts(props)
        .pipe(
          map(productsInfo =>
            LoadProductsSuccess({
              products: productsInfo.body,
              totalCountProducts: +productsInfo.headers.get('X-Total-Count')
            })
          )
        );
    }),
  ));

  public updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateProduct),
    mergeMap((props) => {
      return this.backendService.productService.updateProduct(props)
        .pipe(
          map(success => {
            this.router.navigate(['product-list']);
            return UpdateProductSuccess(success);
          }
          )
        );
    }),
  ));

  public removeProduct$ = createEffect(() => this.actions$.pipe(
    ofType(RemoveProduct),
    mergeMap(({props}) => {
      return this.backendService.productService.removeProduct(props)
        .pipe(
          map(success => {
              this.router.navigate(['product-list']);
              return RemoveProductSuccess(success);
            }
          )
        );
    }),
  ));

  public addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(AddProduct),
    mergeMap((product) => {
      return this.backendService.productService.addProduct(product)
        .pipe(
          map(success => {
              this.router.navigate(['product-list']);
              return AddProductSuccess(success);
            }
          )
        );
    }),
  ));
}
