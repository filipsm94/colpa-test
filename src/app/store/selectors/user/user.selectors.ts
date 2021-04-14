import { createSelector } from '@ngrx/store';
import { ColpatriaState } from '../../reducers';

const userSelector = (state: ColpatriaState) => state.user;

export const getUserSelector = createSelector(
    userSelector,
    (user) => user
);
