import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './security/auth.guard';
import { AuthApiService } from './shared/services/auth-api/auth-api.service';
import { AuthService } from './shared/services/auth/auth.service';
import { StorageService } from './shared/services/storage/storage.service';
import { ColpartiaStoreModule } from './store/colpatria-store.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ColpartiaStoreModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AuthApiService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
