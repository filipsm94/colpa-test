import { IProductModel } from '../../models/products.model';
import { IUserModel } from '../../models/user.model';

export interface IStorageService {

  setUuid(Uuid: string): void;

  getUuid(): Promise<string>;

  setUser(user: IUserModel): void;

  getUser(): Promise<IUserModel>;

  setProductSelected(product: IProductModel): void;

  getProductSelected(): Promise<IProductModel>;

  clearSessionInfo(): void;
}
