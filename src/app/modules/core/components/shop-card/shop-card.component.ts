import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Input() product!: Product;
  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  select(product: Product): void {
    this.selected.emit(product);
  }

}
