import { createReducer, on } from '@ngrx/store';
import { LoadUserSuccess, UpdateRole } from './user.action';
import { IUser } from '../shared/interfaces/user.interface';
import { Role } from '../shared/enums/role.enum';

const defaultState: IUser = {
  role: Role.Admin
};

export const user = createReducer<IUser>(
  defaultState,
  on(LoadUserSuccess, (state, result) => result),
  on(UpdateRole, (state, props) => props)
);
