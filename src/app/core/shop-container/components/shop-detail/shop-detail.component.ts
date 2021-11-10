import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }


  closeProduct(product: Product) {
    product.open = false;
  }
}
