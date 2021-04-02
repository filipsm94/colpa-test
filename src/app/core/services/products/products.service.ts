import { Injectable } from '@angular/core';
import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { accountType } from 'src/app/shared/models/types-account.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { ProductsApiService } from '../products-api/products-api.service';
import { IProductsService } from './products.service.type';

@Injectable()
export class ProductsService implements IProductsService {

  constructor(
    private productsApi: ProductsApiService
  ) { }


  getAllProducts(user: IUserModel): Promise<IProductModel[]> {
    return this.productsApi.getAllProductsToUser(user).then((response) => {
      return response
    }).catch((error) => {
      throw Error(error)
    }).finally(() => {});
  }

  getTransactionToAccount(accountId: string): Promise<ITransactionModel[]>{
    return this.productsApi.getAllTransactionToAccount(accountId).then((response) => {
      return response
    }).catch((error) => {
      throw Error(error)
    }).finally(() => {});
  }

  orderProducts(products: IProductModel[]):IProductModel[]{
    return this.orderByTypeAccount(products);
  }

  orderByTypeAccount(products: IProductModel[]):IProductModel[]{
    const orderAllProducts: IProductModel[] = []
    Object.values(accountType).forEach((typeAccount)=>{
      const orderByAccount = products.filter((product) => (product.accountType === typeAccount))
      const orderByAmount = this.orderByAmountAvaliable(orderByAccount)
      orderAllProducts.push(...orderByAmount);
    })
    return orderAllProducts;
  }

  orderByAmountAvaliable(products: IProductModel[]):IProductModel[]{
    return products.sort((a, b) => {
      if (a.accountAmountAvaliable < b.accountAmountAvaliable) {
        return 1;
      }
      if (a.accountAmountAvaliable > b.accountAmountAvaliable) {
        return -1;
      }
      return 0;
    });
  }

  orderByDate(transactions: ITransactionModel[]): ITransactionModel[]{
    return transactions.sort((a, b) => Date.parse(b.dateTransaction) - Date.parse(a.dateTransaction)); 
  }
}
