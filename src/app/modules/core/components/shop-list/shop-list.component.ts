import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() selectProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
