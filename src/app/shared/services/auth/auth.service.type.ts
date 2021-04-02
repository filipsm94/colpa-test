import { AuthRequestModel, IUserModel } from '../../models/user.model';

export interface IAuthService {

  setLogged(value: boolean): void;

  loginUser(infoLogin: AuthRequestModel): Promise<IUserModel> ;

  isLoggedIn(): Promise<boolean> ;

  loggoutUser(): void;

  saveUser(user: IUserModel): void ;
}
