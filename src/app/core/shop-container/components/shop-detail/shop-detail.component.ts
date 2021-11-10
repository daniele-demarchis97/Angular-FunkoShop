import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  @Input() product!: Product;
  @Output() closed = new EventEmitter<Product>();
  @Output() bought = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  close(product: Product): void {
    this.closed.emit(product);
  }

  buy(product: Product): void {
    this.bought.emit(product);
  }

}
