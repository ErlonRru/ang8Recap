import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../services/cart/cart.service';
import {products} from '../../../model/product/products';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  // se impossibile fare nan + number, non riescere a fare la somma, inzializzare a 0
  subTotal: number;
  items;
  checkoutForm;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,) {

    this.subTotal = 0;
    this.items = this.cartService.getItems();
    for (let item of this.items) {
      this.subTotal = this.subTotal + item.price;
    }
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      tel: '',
      msg: ''
    });

  }

  goToDetail(prod) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].name == prod.name) {
        return i;
      }
    }
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
