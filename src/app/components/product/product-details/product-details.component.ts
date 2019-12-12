import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../../model/product/products';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private activatedRoute: ActivatedRoute,private cartService: CartService) { }

  ngOnInit() {
    console.log("ParamMap", this.activatedRoute.paramMap);
    this.activatedRoute.paramMap.subscribe(
        parmas =>{
          this.product = products[+parmas.get('productId')];
        });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}
