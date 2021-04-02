import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { defineUuid, deleteUuid } from 'src/app/store/actions/auth.actions';
import { defineProductSelected, deleteProductSelected } from 'src/app/store/actions/product.actions';
import { defineUser, deleteUser } from 'src/app/store/actions/user.actions';
import { ColpatriaState } from 'src/app/store/reducers';
import { getUuidSelector } from 'src/app/store/selectors/auth/auth.selectors';
import { getProductSelector } from 'src/app/store/selectors/product/product.selectors';
import { getUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { IAuthModel } from '../../models/auth.model';
import { IProductModel } from '../../models/products.model';
import { IUserModel } from '../../models/user.model';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;
  let store: MockStore<ColpatriaState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        StorageService,
        provideMockStore()
      ]
    });
    service = TestBed.inject(StorageService);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call setUuid', () => {
    spyOn(store,'dispatch');
    service.setUuid('algo');
    expect(store.dispatch).toHaveBeenCalledWith(
      defineUuid({payload:'algo'})
    );
  });

  it('should be call getUuid', async () => {
    store.overrideSelector(getUuidSelector, 'algo');
    const response = await service.getUuid();
    console.log(response);
    
    expect(response).toEqual('algo');
  });

  it('should be call setUser', () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    spyOn(store,'dispatch');
    service.setUser(mockUser);
    expect(store.dispatch).toHaveBeenCalledWith(
      defineUser({payload:mockUser})
    );
  });

  it('should be call getUser', async () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    }
    store.overrideSelector(getUserSelector, mockUser);
    const response = await service.getUser();
    console.log(response);
    
    expect(response).toEqual(mockUser);
  });

  it('should be call setProductSelected', () => {
    const mockProduct: IProductModel = {
      accountAmountAvaliable:0,
      accountId:'',
      accountState:'',
      accountType:'',
    };
    spyOn(store,'dispatch');
    service.setProductSelected(mockProduct);
    expect(store.dispatch).toHaveBeenCalledWith(
      defineProductSelected({payload:mockProduct})
    );
  });

  it('should be call getProductSelected', async () => {
    const mockProduct: IProductModel = {
      accountAmountAvaliable:0,
      accountId:'12313',
      accountState:'activa',
      accountType:'',
    };
    store.overrideSelector(getProductSelector, mockProduct);
    const response = await service.getProductSelected();
    
    expect(response).toEqual(mockProduct);
  });

  it('should be call closeSessionInfo', () => {
    spyOn(store,'dispatch');
    service.clearSessionInfo();
    expect(store.dispatch).toHaveBeenCalledWith(
      deleteProductSelected()
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      deleteUser()
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      deleteUuid()
    );
  });
});
