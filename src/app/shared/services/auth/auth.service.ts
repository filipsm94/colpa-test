import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequestModel, IUserModel } from '../../models/user.model';
import { AuthApiService } from '../auth-api/auth-api.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {

  constructor(
    private authApiService: AuthApiService,
    private storageService: StorageService,
    private router: Router
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

  loggoutUser(){
    this.storageService.clearSessionInfo();
    this.router.navigate(['/login']);
  }

  saveUser(user: IUserModel): void {
    this.storageService.setUser(user)
  }
}
