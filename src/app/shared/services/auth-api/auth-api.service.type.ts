import { AuthRequestModel } from '../../models/user.model';

export interface IAuthApiService {
  loginUser(infoLogin: AuthRequestModel): Promise<any>;
}
