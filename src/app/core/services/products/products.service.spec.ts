import { TestBed } from '@angular/core/testing';
import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { ProductsApiService } from '../products-api/products-api.service';
import { ProductsApiServiceStub } from '../products-api/products-api.service.stub';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let productsApiService: ProductsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsService,
        { provide: ProductsApiService, useClass: ProductsApiServiceStub },
      ],
    });
    service = TestBed.inject(ProductsService);
    productsApiService = TestBed.inject(ProductsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return list of products', async () => {
    const mockUser: IUserModel = {
      nombre: 'felipe',
      apellido: 'mesa',
      cedula: 10,
    };
    const mockProducts: IProductModel[] = [
      {
        accountId: '654651484',
        accountType: 'Cuenta de ahorros',
        accountState: 'Activa',
        accountAmountAvaliable: 13215616
      },
      {
        accountId: '68469682254',
        accountType: 'Tarjeta de Credito',
        accountState: 'Activa',
        accountAmountAvaliable: 564681
      },
      {
          accountId: '6594851484',
          accountType: 'Cuenta de ahorros',
          accountState: 'Activa',
          accountAmountAvaliable: 5465165168
      },
      {
          accountId: '654451489',
          accountType: 'Cuenta Corriente',
          accountState: 'Inactiva',
          accountAmountAvaliable: 200
      },
    ];

    spyOn(productsApiService, 'getAllProductsToUser').and.returnValue(Promise.resolve(mockProducts));

    const result = await service.getAllProducts(mockUser);

    expect(result).toEqual(mockProducts);

  });


  it('should be return list of Transactions', async () => {
    const expectResponse: ITransactionModel[] = [
      {
        id: '00000001',
        dateTransaction: '01/01/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000002',
        dateTransaction: '01/02/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000003',
        dateTransaction: '02/01/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
    ];

    spyOn(productsApiService, 'getAllTransactionToAccount').and.returnValue(Promise.resolve(expectResponse));

    const result = await service.getTransactionToAccount('4124');

    expect(result).toEqual(expectResponse);

  });

  it('should be return list of product in order', async () => {
    const mockProducts: IProductModel[] = [
      {
        accountId: '654651484',
        accountType: 'Cuenta de ahorros',
        accountState: 'Activa',
        accountAmountAvaliable: 13215616
      },
      {
        accountId: '68469682254',
        accountType: 'Tarjeta de Credito',
        accountState: 'Activa',
        accountAmountAvaliable: 564681
      },
      {
        accountId: '6594851484',
        accountType: 'Cuenta de ahorros',
        accountState: 'Activa',
        accountAmountAvaliable: 5465165168
      },
      {
        accountId: '654451489',
        accountType: 'Cuenta Corriente',
        accountState: 'Inactiva',
        accountAmountAvaliable: 200
      },
    ];

    const expectProducts: IProductModel[] = [
      {
          accountId: '6594851484',
          accountType: 'Cuenta de ahorros',
          accountState: 'Activa',
          accountAmountAvaliable: 5465165168
      },
      {
        accountId: '654651484',
        accountType: 'Cuenta de ahorros',
        accountState: 'Activa',
        accountAmountAvaliable: 13215616
      },
      {
          accountId: '654451489',
          accountType: 'Cuenta Corriente',
          accountState: 'Inactiva',
          accountAmountAvaliable: 200
      },
      {
        accountId: '68469682254',
        accountType: 'Tarjeta de Credito',
        accountState: 'Activa',
        accountAmountAvaliable: 564681
      },
    ];

    const result = service.orderProducts(mockProducts);

    expect(result).toEqual(expectProducts);

  });


  it('should be return list of product in order', async () => {
    const mockTransactions: ITransactionModel[] = [
      {
        id: '00000001',
        dateTransaction: '01/05/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000002',
        dateTransaction: '01/01/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000003',
        dateTransaction: '02/05/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
    ];

    const expectTransactions: ITransactionModel[] = [
      {
        id: '00000003',
        dateTransaction: '02/05/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000001',
        dateTransaction: '01/05/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
      {
        id: '00000002',
        dateTransaction: '01/01/2021',
        amountTransaction: 16564,
        description: 'giro'
      },
    ];

    const result = service.orderByDate(mockTransactions);

    expect(result).toEqual(expectTransactions);

  });

});
