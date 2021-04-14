import { Action, createReducer, on } from '@ngrx/store';
import { IUserModel } from 'src/app/shared/models/user.model';
import { defineUser, deleteUser } from '../../actions/user.actions';

export const colpatriaUser: IUserModel = {
    nombre: '',
    apellido: '',
    cedula: 0,
};

const _userReducer = createReducer(
    colpatriaUser,
    on(defineUser, (state , {payload}) => payload ),
    on(deleteUser, () => colpatriaUser)
);

export function userReducer(state: IUserModel = colpatriaUser, action: Action){
    return _userReducer(state, action);
}
