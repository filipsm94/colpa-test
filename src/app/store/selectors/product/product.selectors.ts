import { createSelector } from "@ngrx/store";
import { ColpatriaState } from "../../reducers";

const productSelector = (state: ColpatriaState) => state.selectedProduct;

export const getProductSelector = createSelector(
    productSelector,
    (product) => product
)