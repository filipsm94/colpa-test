import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { IProductsService } from './products.service.type';

export class ProductsServiceStub implements IProductsService {
  getAllProducts(user: IUserModel): Promise<IProductModel[]> {
    return Promise.resolve([])
  }
  getTransactionToAccount(accountId: string): Promise<ITransactionModel[]> {
    return Promise.resolve([])
  }
  orderProducts(products: IProductModel[]): IProductModel[] {
    return []
  }
  orderByTypeAccount(products: IProductModel[]): IProductModel[] {
    return []
  }
  orderByAmountAvaliable(products: IProductModel[]): IProductModel[] {
    return []
  }
  orderByDate(transactions: ITransactionModel[]): ITransactionModel[] {
    return []
  }

}
