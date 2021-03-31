import { ActionReducerMap } from "@ngrx/store";
import { IAuthModel } from "src/app/shared/models/auth.model";
import { IUserModel } from "src/app/shared/models/user.model";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./user/user.reducer";

export interface ColpatriaState {
    auth: IAuthModel;
    user: IUserModel;
}

export const reducers: ActionReducerMap<ColpatriaState> = {
    auth: authReducer,
    user: userReducer
}