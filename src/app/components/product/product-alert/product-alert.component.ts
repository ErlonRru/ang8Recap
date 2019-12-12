import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  text:string;
  constructor() { }

  ngOnInit() {
  }

  notifyFunc(){
    console.log("Costa na frega ziiiii");
  }

  priceLow(){
    return this.text ='Prezzo basso, coglioneeeeeee COMPRAAAAAAAAAAAAAAAAAAAA';
  }
}
