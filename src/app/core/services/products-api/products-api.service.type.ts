import { IUserModel } from "src/app/shared/models/user.model";

export interface IProductsApiService {

  getAllProductsToUser(user: IUserModel): Promise<any>;

  getAllTransactionToAccount(accountId: string): Promise<any>;
}
