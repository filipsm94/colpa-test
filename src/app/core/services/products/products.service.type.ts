import { IProductModel, ITransactionModel } from "src/app/shared/models/products.model";
import { IUserModel } from "src/app/shared/models/user.model";

export interface IProductsService {

  getAllProducts(user: IUserModel): Promise<IProductModel[]>;

  getTransactionToAccount(accountId: string): Promise<ITransactionModel[]>;

  orderProducts(products: IProductModel[]):IProductModel[];

  orderByTypeAccount(products: IProductModel[]):IProductModel[];

  orderByAmountAvaliable(products: IProductModel[]):IProductModel[];

  orderByDate(transactions: ITransactionModel[]): ITransactionModel[];
}
