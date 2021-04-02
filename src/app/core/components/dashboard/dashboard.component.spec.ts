import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IProductModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { StorageServiceStub } from 'src/app/shared/services/storage/storage.service.stub';
import { ProductsService } from '../../services/products/products.service';
import { ProductsServiceStub } from '../../services/products/products.service.stub';
import { CardProductComponent } from '../card-products/card-product.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let storageService: StorageService;
  let productsService: ProductsService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, CardProductComponent ],
      providers:[
        { provide: StorageService, useClass: StorageServiceStub },
        { provide: ProductsService, useClass: ProductsServiceStub },
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    storageService = TestBed.inject(StorageService);
    productsService = TestBed.inject(ProductsService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });


  it('should be call ngOnInit', async () => {
    const mockUser: IUserModel = {
      nombre:'felipe',
      apellido:'mesa',
      cedula:10,
    };
    const mockProducts: IProductModel[] = [
      {
        accountId:'654651484',
        accountType:'Cuenta de ahorros',
        accountState:'Activa',
        accountAmountAvaliable:13215616
      },
      {
        accountId:'68469682254',
        accountType:'Tarjeta de Credito',
        accountState:'Activa',
        accountAmountAvaliable:564681
      },
      {
          accountId:'6594851484',
          accountType:'Cuenta de ahorros',
          accountState:'Activa',
          accountAmountAvaliable:5465165168
      },
      {
          accountId:'654451489',
          accountType:'Cuenta Corriente',
          accountState:'Inactiva',
          accountAmountAvaliable:200
      },
    ];
    spyOn(storageService,'getUser').and.returnValue(Promise.resolve(mockUser));
    spyOn(productsService,'orderProducts').and.returnValue(mockProducts);
    await component.ngOnInit();
    expect(component.user).toEqual(mockUser);
    expect(component.products).toEqual(mockProducts);
  });

  it('should be call goToSelectionProductToDetail', async () => {

    const mockProducts: IProductModel = {
      accountId:'654651484',
      accountType:'Cuenta de ahorros',
      accountState:'Activa',
      accountAmountAvaliable:13215616
    };
    spyOn(storageService,'setProductSelected');
    spyOn(router,'navigate');
    await component.goToSelectionProductToDetail(mockProducts);
    expect(storageService.setProductSelected).toHaveBeenCalledWith(mockProducts);
    expect(router.navigate).toHaveBeenCalledWith(['products/detail']);
  });
});
