import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './components/menu/top-bar/top-bar.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductAlertComponent} from './components/product/product-alert/product-alert.component';
import {ProductDetailsComponent} from './components/product/product-details/product-details.component';
import {CartComponent} from './components/checkout/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {ShippingComponent} from './components/checkout/shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: 'home', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

