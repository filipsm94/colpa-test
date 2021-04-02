import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IProductModel } from 'src/app/shared/models/products.model';
import { OpaqueTextPipe } from 'src/app/shared/pipes/opaque-text.pipe';

import { CardProductComponent } from './card-product.component';

describe('CardProductComponent', () => {
  let component: CardProductComponent;
  let fixture: ComponentFixture<CardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductComponent, OpaqueTextPipe ],
      providers:[
        OpaqueTextPipe
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should selectedProduct', () => {
    const mockProduct: IProductModel = {
      accountAmountAvaliable:0,
      accountId:'12313',
      accountState:'activa',
      accountType:'',
    };
    spyOn(component.productSelectionEvent,'emit');
    component.selectedProduct(mockProduct)
    expect(component.productSelectionEvent.emit).toHaveBeenCalledWith(mockProduct);
  });
});
