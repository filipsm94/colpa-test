import { createSelector } from '@ngrx/store';
import { ColpatriaState } from '../../reducers';

const authSelector = (state: ColpatriaState) => state.auth;

export const getUuidSelector = createSelector(
    authSelector,
    (auth) => auth.UuidUser
);
