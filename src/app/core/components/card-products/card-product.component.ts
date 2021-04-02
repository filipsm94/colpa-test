import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductModel } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product: IProductModel;

  @Output() productSelectionEvent = new EventEmitter<IProductModel>();

  constructor() {
    this.product={
      accountAmountAvaliable:0,
      accountId:'',
      accountState:'',
      accountType:''
    }
  }

  selectedProduct(product: IProductModel): void{
    this.productSelectionEvent.emit(product);
  }

}

