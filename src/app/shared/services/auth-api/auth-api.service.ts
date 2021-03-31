import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthRequestModel } from '../../models/user.model';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthApiService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
    ) { }

  loginUser(infoLogin: AuthRequestModel): Promise<any> {
    return this.httpClient.post(
        'https://run.mocky.io/v3/6b254644-d547-4b14-948a-a18333d2ac23',
        infoLogin,
        {observe:'response'}
      ).pipe(
      map((response) => {
        const uuid = response.headers.get('X-UUID-USER');
        if(uuid){
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
