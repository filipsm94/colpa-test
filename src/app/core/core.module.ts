import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { CardProductComponent } from './components/card-products/card-product.component';
import { CoreRoutingModule } from './core-routing.module';
import { ProductsService } from './services/products/products.service';
import { ProductsApiService } from './services/products-api/products-api.service';
import { OpaqueTextPipe } from '../shared/pipes/opaque-text.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    CardProductComponent,
    DetailProductComponent,
    OpaqueTextPipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers:[
    ProductsService,
    ProductsApiService,
    OpaqueTextPipe
  ]
})
export class CoreModule { }
