import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  @Input() product!: Product;
  @Input() cart!: Cart;

  constructor() { }

  ngOnInit(): void {
  }

}
