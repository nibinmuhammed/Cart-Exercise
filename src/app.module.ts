import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { CartComponent } from './app/component/cart/cart.component';
import { ErrorComponent } from './app/component/error/error.component';
import { HeaderComponent } from './app/component/header/header.component';
import { ProductsComponent } from './app/component/products/products.component';
import { ViewComponent } from './app/component/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ViewComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
