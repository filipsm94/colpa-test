import { Injectable } from '@angular/core';
import { AuthRequestModel, IUserModel } from '../../models/user.model';
import { AuthApiService } from '../auth-api/auth-api.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {

  constructor(
    private authApiService: AuthApiService,
    private storageService: StorageService  
  ) { }

  loginUser(infoLogin: AuthRequestModel): Promise<IUserModel> {
    return this.authApiService.loginUser(infoLogin).then((response) => {
      return response.user
    }).catch((error) => {
      throw Error(error)
    });
  }

  async isLoggedIn(): Promise<boolean> {
    if (await this.storageService.getUuid()){
      return true
    };
    return false
  }

  saveUser(user: IUserModel): void {
    this.storageService.setUser(user)
  }
}
