import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product.interface';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { LoadProducts, LoadProductsSuccess, RemoveProduct } from './product.action';
import { IProductsInfo } from '../shared/interfaces/products';

const defaultState: IProductsInfo = {
  products: [],
  totalCountProducts: 0
};

export const productsInfo = createReducer(
  defaultState,
  on(LoadProductsSuccess, (state, props) =>
    props,
  )
);
