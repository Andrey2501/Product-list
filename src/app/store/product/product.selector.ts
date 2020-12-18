import { createSelector } from '@ngrx/store';
import { IProduct } from '../shared/interfaces/product.interface';
import { IState } from '../shared/interfaces/state.interface';

export const getProductById = (productId: number) => createSelector(selectProductsState, (products): IProduct => {
  if (products) {
    return products.find(product => product.id === productId);
  }

  return {
    id: productId,
    name: '',
    category: '',
    price: 0
  };
});

export const selectProductsState = (state: IState): IProduct[] => state.productsInfo.products;

export const selectTotalCountProductsState = (state: IState): number => state.productsInfo.totalCountProducts;
