import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  @Input() product!: Product;
  @Output() closeProduct = new EventEmitter<boolean>();
  @Output() buyProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

}
