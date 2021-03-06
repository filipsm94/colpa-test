import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthRequestModel } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';
import { IAuthApiService } from './auth-api.service.type';
import { UrlConstans } from '../../constans/url-constant.model';

@Injectable()
export class AuthApiService implements IAuthApiService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
    ) { }

  loginUser(infoLogin: AuthRequestModel): Promise<any> {
    return this.httpClient.post(
        `${UrlConstans.apiUrl}6b254644-d547-4b14-948a-a18333d2ac23`,
        infoLogin,
        {observe: 'response'}
      ).pipe(
      map((response) => {
        const uuid = response.headers.get('X-UUID-USER');
        if (uuid){
          this.storageService.setUuid(uuid);
        }
        return response.body;
      }),
      catchError((error) => {
        return throwError(error);
      })
    ).toPromise();
  }
}
