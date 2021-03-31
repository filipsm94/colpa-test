import { Injectable } from '@angular/core';
import { ProductsApiService } from '../products-api/products-api.service';
import { IProductsService } from './products.service.type';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProductsService {

  constructor(
    private productsApi: ProductsApiService
  ) { }


  getAllProducts(): Promise<any> {
    return this.productsApi.getAllProductsToUser().then((response) => {
      return {
        algo: ''
      }
    }).catch((error) => {
      throw Error(error)
    }).finally(() => {});
  }
}
