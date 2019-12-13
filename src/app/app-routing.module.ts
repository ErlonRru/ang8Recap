import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product/product-details/product-details.component';
import {CartComponent} from './components/checkout/cart/cart.component';
import {ShippingComponent} from './components/checkout/shipping/shipping.component';
import {HeroListComponent} from './heroes/component/hero-list/hero-list.component';
import {HeroDetailComponent} from './heroes/component/hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'home', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero-detail', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
