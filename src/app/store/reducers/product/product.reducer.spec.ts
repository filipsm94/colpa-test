import { IProductModel } from "src/app/shared/models/products.model";
import { defineProductSelected, deleteProductSelected } from "../../actions/product.actions";
import { colpatriaProduct, productReducer } from "./product.reducer";

describe('AuthReducer', () => {

    it('should return selected product',() => {
        const initialState = colpatriaProduct;
        const expectedState:IProductModel = { 
            accountId: '123',
            accountType: 'Ahorros',
            accountState: 'activa',
            accountAmountAvaliable: 10
         };

        const nextState = productReducer(initialState, defineProductSelected({payload:{
            accountId: '123',
            accountType: 'Ahorros',
            accountState: 'activa',
            accountAmountAvaliable: 10
        }}));

        expect(nextState).toEqual(expectedState);
    })

    it('should reset selected product',() => {
        const initialState = colpatriaProduct;
        const expectedState:IProductModel = { 
            accountId: '',
            accountType: '',
            accountState: '',
            accountAmountAvaliable: 10
         };

        const nextState = productReducer(initialState, deleteProductSelected());

        expect(nextState).toEqual(expectedState);
    })
    
});