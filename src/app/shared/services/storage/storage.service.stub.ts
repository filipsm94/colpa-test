import { IProductModel } from '../../models/products.model';
import { IUserModel } from '../../models/user.model';
import { IStorageService } from './storage.service.type';

export class StorageServiceStub implements IStorageService {
  setUuid(Uuid: string): void {
    throw new Error('Method not implemented.');
  }
  getUuid(): Promise<string> {
    throw new Error('Method not implemented.');
  }
  setUser(user: IUserModel): void {
    throw new Error('Method not implemented.');
  }
  getUser(): Promise<IUserModel> {
    throw new Error('Method not implemented.');
  }
  setProductSelected(product: IProductModel): void {
    throw new Error('Method not implemented.');
  }
  getProductSelected(): Promise<IProductModel> {
    return Promise.resolve({
      accountAmountAvaliable: 0,
      accountId: '12313',
      accountState: 'activa',
      accountType: '',
    });
  }
  clearSessionInfo(): void {
    throw new Error('Method not implemented.');
  }


}
