import { Observable, of } from 'rxjs';
import { AuthRequestModel, IUserModel } from '../../models/user.model';
import { IAuthService } from './auth.service.type';

export class AuthServiceStub implements IAuthService{

  get isLogged(): Observable<boolean>{
    return of(false);
  }

  setLogged(value: boolean): void {
    throw new Error('Method not implemented.');
  }
  loginUser(infoLogin: AuthRequestModel): Promise<IUserModel> {
    throw new Error('Method not implemented.');
  }
  isLoggedIn(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  loggoutUser(): void {
    throw new Error('Method not implemented.');
  }
  saveUser(user: IUserModel): void {
    throw new Error('Method not implemented.');
  }

}
