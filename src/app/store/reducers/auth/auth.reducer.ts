import { Action, createReducer, on } from "@ngrx/store";
import { IAuthModel } from "src/app/shared/models/auth.model";
import { defineUuid, deleteUuid } from "../../actions/auth.actions";

const colpatriaAuth: IAuthModel = { UuidUser: '' }

const _authReducer = createReducer(
    colpatriaAuth,
    on(defineUuid, (state, {payload}) => ({...state, UuidUser: payload})),
    on(deleteUuid, (state) => ({...state, UuidUser: ''}))
);

export function authReducer(state: IAuthModel = colpatriaAuth, action: Action): IAuthModel{
    return _authReducer(state, action)
}