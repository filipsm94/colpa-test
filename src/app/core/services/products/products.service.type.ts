import { IProductModel } from "src/app/shared/models/products.model";
import { IUserModel } from "src/app/shared/models/user.model";

export interface IProductsService {

  getAllProducts(user: IUserModel): Promise<IProductModel[]> 
}
