import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthRequestModel, IUserModel } from '../../models/user.model';
import { AuthApiService } from '../auth-api/auth-api.service';
import { StorageService } from '../storage/storage.service';
import { IAuthService } from './auth.service.type';

@Injectable()
export class AuthService implements IAuthService{

  private readonly _isLoggedIn = new BehaviorSubject(false);

  constructor(
    private authApiService: AuthApiService,
    private storageService: StorageService,
    private router: Router
  ) { }

  get isLogged(): Observable<boolean>{
    return this._isLoggedIn;
  }

  public setLogged(value: boolean){
    this._isLoggedIn.next(value);
  }

  loginUser(infoLogin: AuthRequestModel): Promise<IUserModel> {
    return this.authApiService.loginUser(infoLogin).then((response) => {
      return response.user;
    }).catch((error) => {
      throw Error(error);
    });
  }

  async isLoggedIn(): Promise<boolean> {
    if (await this.storageService.getUuid()){
      this.setLogged(true);
      return true;
    }
    return false;
  }

  loggoutUser(){
    this.storageService.clearSessionInfo();
    this.setLogged(false);
    this.router.navigate(['/login']);
  }

  saveUser(user: IUserModel): void {
    this.storageService.setUser(user);
  }
}
