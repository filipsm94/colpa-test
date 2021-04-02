import { Action, createReducer, on } from "@ngrx/store";
import { IProductModel } from "src/app/shared/models/products.model";
import { IUserModel } from "src/app/shared/models/user.model";
import { defineProductSelected, deleteProductSelected } from "../../actions/product.actions";
import { defineUser, deleteUser } from "../../actions/user.actions";

const colpatriaProduct: IProductModel = {
    accountAmountAvaliable:0,
    accountId:'',
    accountState:'',
    accountType:'',
};

const _productReducer = createReducer(
    colpatriaProduct,
    on(defineProductSelected, (state ,{payload}) => payload ),
    on(deleteProductSelected, () => colpatriaProduct)
);

export function productReducer(state: IProductModel = colpatriaProduct, action: Action){
    return _productReducer(state, action)
}