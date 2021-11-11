import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/Cart';

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

  @Output() empty = new EventEmitter<Cart>();

  ngOnInit(): void {
  }

  emptyCart(): void {
    this.empty.emit(this.cart);
  }

}
