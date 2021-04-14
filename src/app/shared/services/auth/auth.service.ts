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

  public setLogged(value: boolean): void{
    this._isLoggedIn.next(value);
  }

  public loginUser(infoLogin: AuthRequestModel): Promise<IUserModel> {
    return this.authApiService.loginUser(infoLogin).then((response) => {
      return response.user;
    }).catch((error) => {
      throw Error(error);
    });
  }

  public async isLoggedIn(): Promise<boolean> {
    if (await this.storageService.getUuid()){
      this.setLogged(true);
      return true;
    }
    return false;
  }

  public loggoutUser(): void{
    this.storageService.clearSessionInfo();
    this.setLogged(false);
    this.router.navigate(['/login']);
  }

  public saveUser(user: IUserModel): void {
    this.storageService.setUser(user);
  }
}
