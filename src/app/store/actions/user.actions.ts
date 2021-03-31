import { createAction, props } from "@ngrx/store";
import { IUserModel } from "src/app/shared/models/user.model";

interface Iupdateuser {
    payload: IUserModel
}

export const defineUser = createAction('[Core Module] define User', props<Iupdateuser>())
export const deleteUser = createAction('[Core Module] delete User')