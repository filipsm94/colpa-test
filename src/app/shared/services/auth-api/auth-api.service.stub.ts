import { AuthRequestModel } from '../../models/user.model';
import { IAuthApiService } from './auth-api.service.type';

export class AuthApiServiceStub implements IAuthApiService{
  loginUser(infoLogin: AuthRequestModel): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
