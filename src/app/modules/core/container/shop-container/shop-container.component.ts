import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { PRODUCTS } from 'src/app/shared/models/mock-data';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {

  /* selectedProduct!: Product;
  cart: Cart = {
    numItems: 0,
    price: 0
  }; */

  products = PRODUCTS;
  product!: Product;
  hide = true;
  cart: Product[] = [];

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
    }
  }

  /* emptyCart(product: Product): void {

  } */

  /* buyProduct(product: Product): void {
    if (product.availability > 0) {
      product.availability--;
      product.quantityCart++;
      product.priceCart += product.price;
    }
  } */

  /* emptyCart(event: Cart): void {      //fix reset availability  (parametro corretto??)  , inoltre aggiunger possibilità rimuovere singolo oggetto
    this.products[0].availability = 45;
    this.products[1].availability = 23;
    this.products[2].availability = 3;
    this.cart.numItems = 0,
    this.cart.price = 0;
    this.products[0].quantityCart = 0;
    this.products[0].priceCart = 0;
    this.products[1].quantityCart = 0;
    this.products[1].priceCart = 0;
    this.products[2].quantityCart = 0;
    this.products[2].priceCart = 0;
  } */

}
