import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductsApiService } from './products-api.service.type';

@Injectable()
export class ProductsApiService implements IProductsApiService {

  constructor(private httpClient: HttpClient) { }

  getAllProductsToUser(): Promise<any> {
    return this.httpClient.get('').toPromise();
  }
}
