import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {AppComponent} from './app.component';
import {TopBarComponent} from './components/menu/top-bar/top-bar.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductAlertComponent} from './components/product/product-alert/product-alert.component';
import {ProductDetailsComponent} from './components/product/product-details/product-details.component';
import {CartComponent} from './components/checkout/cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {ShippingComponent} from './components/checkout/shipping/shipping.component';
import {HeroListComponent} from './heroes/component/hero-list/hero-list.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroDetailComponent} from './heroes/component/hero-detail/hero-detail.component';
import {MessageComponent} from './heroes/component/message/message.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/inMemory/in-memory-data.service';
import {HeroSearchComponent} from './heroes/component/hero-search/hero-search.component';
import { DashboardComponent } from './heroes/component/dashboard/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    HeroListComponent,
    HeroDetailComponent,
    MessageComponent,
    HeroSearchComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

