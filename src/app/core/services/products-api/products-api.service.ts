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
    return this.httpClient.post('https://run.mocky.io/v3/966b2a22-d110-4598-bf23-6d53c8fe81d6',
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
}
