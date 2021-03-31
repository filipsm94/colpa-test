import { createAction, props } from "@ngrx/store";
import { IAuthModel } from "src/app/shared/models/auth.model";

export const defineUuid = createAction('[Login Module] define Uuid', props<{payload: string}>())
export const deleteUuid = createAction('[Login Module] delete Uuid')