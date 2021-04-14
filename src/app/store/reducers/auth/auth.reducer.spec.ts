import { IAuthModel } from 'src/app/shared/models/auth.model';
import { defineUuid, deleteUuid } from '../../actions/auth.actions';
import { colpatriaAuth, authReducer } from './auth.reducer';

describe('AuthReducer', () => {

    it('should return UUID', () => {
        const initialState = colpatriaAuth;
        const expectedState: IAuthModel = { UuidUser: 'any' };

        const nextState = authReducer(initialState, defineUuid({payload: 'any'}));

        expect(nextState).toEqual(expectedState);
    });

    it('should reset UUID', () => {
        const initialState = colpatriaAuth;
        const expectedState: IAuthModel = { UuidUser: '' };

        const nextState = authReducer(initialState, deleteUuid());

        expect(nextState).toEqual(expectedState);
    });

});
