import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { IProductsService } from './products.service.type';

export class ProductsServiceStub implements IProductsService {
  getAllProducts(user: IUserModel): Promise<IProductModel[]> {
    throw new Error('Method not implemented.');
  }
  getTransactionToAccount(accountId: string): Promise<ITransactionModel[]> {
    throw new Error('Method not implemented.');
  }
  orderProducts(products: IProductModel[]): IProductModel[] {
    throw new Error('Method not implemented.');
  }
  orderByTypeAccount(products: IProductModel[]): IProductModel[] {
    throw new Error('Method not implemented.');
  }
  orderByAmountAvaliable(products: IProductModel[]): IProductModel[] {
    throw new Error('Method not implemented.');
  }
  orderByDate(transactions: ITransactionModel[]): ITransactionModel[] {
    throw new Error('Method not implemented.');
  }

}
