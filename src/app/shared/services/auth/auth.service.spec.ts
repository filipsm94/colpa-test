import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, of } from 'rxjs';
import { AuthRequestModel, IUserModel } from '../../models/user.model';
import { AuthApiService } from '../auth-api/auth-api.service';
import { AuthApiServiceStub } from '../auth-api/auth-api.service.stub';
import { StorageService } from '../storage/storage.service';
import { StorageServiceStub } from '../storage/storage.service.stub';

import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
  let service: AuthService;
  let authApiService: AuthApiService;
  let storageService: StorageService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        AuthService,
        { provide: AuthApiService, useClass: AuthApiServiceStub },
        { provide: StorageService, useClass: StorageServiceStub },
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ]
    });
    service = TestBed.inject(AuthService);
    authApiService = TestBed.inject(AuthApiService);
    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for isLogged', () => {
    spyOnProperty(service,'isLogged').and.returnValue(of(true));
    const result = service.isLogged;
    expect(result).toBeTruthy();
  });


  it('should return true for isLogged', async () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    spyOn(authApiService,'loginUser').and.returnValue(Promise.resolve({user:mockUser}))
    const mockUserRequest: AuthRequestModel = {
      username:'felipe',
      password:'123'
    };
    const result = await service.loginUser(mockUserRequest);
    expect(result).toEqual(mockUser);
  });

  it('should return true for isLoggedIn in true', async () => {
    spyOn(service,'setLogged');
    spyOn(storageService,'getUuid').and.returnValue(Promise.resolve('any'))
    const result = await service.isLoggedIn();
    expect(result).toBeTruthy();
    expect(service.setLogged).toHaveBeenCalledWith(true);
  });

  it('should return true for isLoggedIn in false', async () => {
    spyOn(service,'setLogged');
    spyOn(storageService,'getUuid').and.returnValue(Promise.resolve(''))
    const result = await service.isLoggedIn();
    expect(result).toBeFalsy();
  });

  it('should be call loggoutUser', () => {
    spyOn(service,'setLogged');
    spyOn(router,'navigate');
    spyOn(storageService,'clearSessionInfo');
    service.loggoutUser();
    expect(storageService.clearSessionInfo).toHaveBeenCalled();
    expect(service.setLogged).toHaveBeenCalledWith(false);
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should be call loggoutUser', () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    spyOn(storageService,'setUser');
    service.saveUser(mockUser);
    expect(storageService.setUser).toHaveBeenCalledWith(mockUser);
  });

  it('should be call setLogged', () => {
    const result = new BehaviorSubject(true);
    service.setLogged(true);
    expect((service as any).isLogged).toEqual(result);
  });

});
