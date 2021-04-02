import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IProductModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { IProductsApiService } from './products-api.service.type';

@Injectable()
export class ProductsApiService implements IProductsApiService {

  constructor(private httpClient: HttpClient) { }

  getAllProductsToUser(user: IUserModel): Promise<any> {
    return this.httpClient.post('https://run.mocky.io/v3/9862c578-93a5-4e97-bbbf-966d286ff1dc',
    user,
    {observe:'response'}
  ).pipe(
      map((response) => {
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }


  getAllTransactionToAccount(accountId: string): Promise<any> {
    return this.httpClient.post('https://run.mocky.io/v3/97281e7a-59b1-4c99-9cce-3626b61106d3',
    accountId,
    {observe:'response'}
  ).pipe(
      map((response) => {
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }
}
