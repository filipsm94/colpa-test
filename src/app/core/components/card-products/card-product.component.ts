import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() accountNumber: string;
  @Input() accountType: string;
  @Input() accountState: string;
  @Input() accountAmountAvaliable?: number;

  constructor(){
    this.accountNumber='';
    this.accountType='';
    this.accountState='';
  }

}
