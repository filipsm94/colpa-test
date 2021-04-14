import { createAction, props } from '@ngrx/store';
import { IProductModel } from 'src/app/shared/models/products.model';

export const defineProductSelected = createAction('[Core Module] define ProductdefineProductSelected', props<{payload: IProductModel}>());
export const deleteProductSelected = createAction('[Core Module] delete ProductdefineProductSelected');
