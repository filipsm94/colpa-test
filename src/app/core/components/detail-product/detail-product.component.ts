import { Component, OnInit } from '@angular/core';
import { IProductModel, ITransactionModel } from 'src/app/shared/models/products.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  public transactions: ITransactionModel[] = [];
  public product: IProductModel|undefined;

  constructor(
    private storageService: StorageService,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.loadInfoTrasactions();
  }

  public async loadInfoTrasactions(): Promise<void>{
    this.product = await this.storageService.getProductSelected();
    const getAllTransactions = await this.productsService.getTransactionToAccount(this.product?.accountId);
    this.transactions = this.productsService.orderByDate(getAllTransactions);
  }

}
