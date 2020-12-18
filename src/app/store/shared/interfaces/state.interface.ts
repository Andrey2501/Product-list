import { IUser } from './user.interface';
import { IProductsInfo } from './products';

export interface IState {
  user: IUser;
  productsInfo: IProductsInfo;
}
