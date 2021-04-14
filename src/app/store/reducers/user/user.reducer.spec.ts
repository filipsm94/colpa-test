import { IUserModel } from 'src/app/shared/models/user.model';
import { defineUser, deleteUser } from '../../actions/user.actions';
import { colpatriaUser, userReducer } from './user.reducer';

describe('userReducer', () => {

    it('should return User', () => {
        const initialState = colpatriaUser;
        const expectedState: IUserModel = {
            nombre: 'felipe',
            apellido: 'mesa',
            cedula: 15310,
        };

        const nextState = userReducer(initialState, defineUser({payload: {
            nombre: 'felipe',
            apellido: 'mesa',
            cedula: 15310,
        }}));

        expect(nextState).toEqual(expectedState);
    });

    it('should reset User', () => {
        const initialState: IUserModel = {
            nombre: 'felipe',
            apellido: 'mesa',
            cedula: 15310,
        };
        const expectedState: IUserModel = colpatriaUser;

        const nextState = userReducer(initialState, deleteUser());

        expect(nextState).toEqual(expectedState);
    });

});
