import { IUserModel } from 'src/app/shared/models/user.model';
import { IProductsApiService } from './products-api.service.type';

export class ProductsApiServiceStub implements IProductsApiService {
  getAllProductsToUser(user: IUserModel): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getAllTransactionToAccount(accountId: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

}
