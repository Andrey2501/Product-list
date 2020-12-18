import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product.interface';
import { IProps } from '../shared/interfaces/props.interface';
import { IProductsInfo } from '../shared/interfaces/products';


export const LoadProducts = createAction(
  '[Product] Load Products',
  props<IProps<number>>(),
);

export const LoadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<IProductsInfo>(),
);

export const LoadProductsFailed = createAction(
  '[Product] Load Products Failed',
);

export const UpdateProduct = createAction(
  '[Product] Update Product',
  props<Partial<IProduct>>(),
);

export const UpdateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<any>(),
);

export const RemoveProduct = createAction(
  '[Product] Remove Product',
  props<IProps<number>>(),
);

export const RemoveProductSuccess = createAction(
  '[Product] Remove Product Success',
  props<any>(),
);

export const AddProduct = createAction(
  '[Product] Add Product',
  props<IProduct>(),
);

export const AddProductSuccess = createAction(
  '[Product] Add Product Success',
  props<any>(),
);

