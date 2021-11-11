import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() cart: Cart = {
    numItems: 0,
    price: 0
  };

  @Input() products: Product[] = [];
  @Input() product!: Product;

  @Output() empty = new EventEmitter<Cart>();
  @Output() ahah = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  emptyCart(): void {
    this.empty.emit(this.cart);
  }

  emptyCartYolo(product: Product): void {
    this.ahah.emit(product);
  }

}
