import { createAction, props } from '@ngrx/store';
import { IUser } from '../shared/interfaces/user.interface';

export const UpdateRole = createAction(
  '[User] Update Role',
  props<IUser>(),
);

export const LoadUserSuccess = createAction(
  '[User] Load User Success',
  props<IUser>(),
);
