import { ActionReducerMap } from '@ngrx/store';
import { IAuthModel } from 'src/app/shared/models/auth.model';
import { IProductModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { authReducer } from './auth/auth.reducer';
import { productReducer } from './product/product.reducer';
import { userReducer } from './user/user.reducer';

export interface ColpatriaState {
    auth: IAuthModel;
    user: IUserModel;
    selectedProduct: IProductModel;
}

export const reducers: ActionReducerMap<ColpatriaState> = {
    auth: authReducer,
    user: userReducer,
    selectedProduct: productReducer
};
