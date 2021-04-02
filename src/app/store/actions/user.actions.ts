import { createAction, props } from "@ngrx/store";
import { IUserModel } from "src/app/shared/models/user.model";

export const defineUser = createAction('[Core Module] define User', props<{payload: IUserModel}>())
export const deleteUser = createAction('[Core Module] delete User')