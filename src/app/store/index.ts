import { ActionReducerMap } from '@ngrx/store';
import { IState } from './shared/interfaces/state.interface';
import { user } from './user/user.reducer';
import { productsInfo } from './product/product.reducer';

const reducers: ActionReducerMap<IState> = {
  user,
  productsInfo
};

export const getReducers = (): ActionReducerMap<IState> => {
  return reducers;
};
