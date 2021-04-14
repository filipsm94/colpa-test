import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductModel } from 'src/app/shared/models/products.model';
import { IUserModel } from 'src/app/shared/models/user.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: IUserModel = {};
  public products: IProductModel[] = [];

  constructor(
    private storageService: StorageService,
    private productsService: ProductsService,
    private router: Router
    ) {
  }

  public ngOnInit(): void {
    this.getUsertoSession();
    this.getProducts();
  }

  public async getUsertoSession(): Promise<void> {
    this.user = await this.storageService.getUser();
  }

  public async getProducts(): Promise<void> {
    const allProducts = await this.productsService.getAllProducts({...this.user});
    this.products = this.productsService.orderProducts(allProducts);
  }

  public goToSelectionProductToDetail(productEvent: IProductModel): void{
    this.storageService.setProductSelected(productEvent);
    this.router.navigate(['products/detail']);
  }


}
