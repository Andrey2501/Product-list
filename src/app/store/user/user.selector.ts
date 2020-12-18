import { IState } from '../shared/interfaces/state.interface';

export const selectRole = (state: IState): string => state.user.role;
