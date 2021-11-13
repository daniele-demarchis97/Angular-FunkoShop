import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { PRODUCTS } from 'src/app/shared/models/mock-data';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {

  products = PRODUCTS;
  product!: Product;
  hide = true;
  cart: Product[] = [];
  totalCart: number = 0;
  productsReset = PRODUCTS;
  productReset!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(value: Product): void {
    this.product = value;
    this.hide = false;
  }

  closeProduct(value: boolean): void {
    this.hide = value;
  }

  buyProduct(product: Product): void {
    if (product.availability > 0) {
      this.cart.push(product);
      product.availability--;
      product.quantityCart++;
      product.priceCart += product.price;
      this.totalCart += product.price;
    }
  }

  emptyCart(cart: Product[], products: Product[]): void {      // reset availability
    cart.splice(0, cart.length);
    products.forEach(el => el.quantityCart = 0);
    products.forEach(el => el.priceCart = 0);
    this.totalCart = 0;
  }

}
