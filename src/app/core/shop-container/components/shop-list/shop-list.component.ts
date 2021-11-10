import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() product!: Product;
  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }


  select(product: Product): void {
    this.selected.emit(product);
  }
}
