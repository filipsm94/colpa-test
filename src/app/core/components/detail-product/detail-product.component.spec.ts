import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { OpaqueTextPipe } from 'src/app/shared/pipes/opaque-text.pipe';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { StorageServiceStub } from 'src/app/shared/services/storage/storage.service.stub';
import { ProductsService } from '../../services/products/products.service';
import { ProductsServiceStub } from '../../services/products/products.service.stub';

import { DetailProductComponent } from './detail-product.component';

describe('DetailProductComponent', () => {
  let component: DetailProductComponent;
  let fixture: ComponentFixture<DetailProductComponent>;
  let storageService: StorageService;
  let productsService: ProductsService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProductComponent, OpaqueTextPipe ],
      providers: [
        { provide: StorageService, useClass: StorageServiceStub },
        { provide: ProductsService, useClass: ProductsServiceStub },
        OpaqueTextPipe
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
    storageService = TestBed.inject(StorageService);
    productsService = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(DetailProductComponent);
    component = fixture.componentInstance;
  });

  it('should ngOnInit', fakeAsync( () => {
    const mockProduct: IProductModel = {
      accountAmountAvaliable: 0,
      accountId: '12313',
      accountState: 'activa',
      accountType: '',
    };
    const mockTransactions: ITransactionModel[] = [
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
    spyOn(storageService, 'getProductSelected').and.returnValue(Promise.resolve(mockProduct));
    spyOn(productsService, 'orderByDate').and.returnValue(mockTransactions);
    component.ngOnInit();
    tick(1000);
    expect(component.product?.accountId).toEqual('12313');
    expect(component.transactions).toEqual(mockTransactions);
  }));

});
