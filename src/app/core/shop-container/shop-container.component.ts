import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.scss']
})
export class ShopContainerComponent implements OnInit {

  selectedProduct!: Product;
  cart: Cart = {
    numItems: 0,
    price: 0
  };

  products: Product[] = [
    {
      id: 1,
      title: "Naruto Funko POP",
      description: "lorem ipsum",
      img: "https://prod-giuntialpunto-static.giunti.stormreply.com/images/I/41cDbR77luL._SL500_.jpg",
      price: 60,
      exitYear: 2010,
      productHeight: 140,
      productWeight: 200,
      itemsProduced: 10000,
      open: false,
      availability: 45
    },
    {
      id: 2,
      title: "Batman Funko POP",
      description: "lorem ipsum",
      img: "https://www.giocabenesrl.it/images/articoli/dem/regular/36879-3.jpg",
      price: 40,
      exitYear: 2015,
      productHeight: 140,
      productWeight: 250,
      itemsProduced: 8000,
      open: false,
      availability: 23
    },
    {
      id: 3,
      title: "Squid Game Funko POP",
      description: "lorem ipsum",
      img: "https://www.thegamebusters.it/23144-large_default/funko-pop-red-soldier-mask-squid-game.jpg",
      price: 120,
      exitYear: 2021,
      productHeight: 140,
      productWeight: 280,
      itemsProduced: 1000,
      open: false,
      availability: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product: Product): void {
    product.open = true;
    this.selectedProduct = product;
  }

  closeProduct(product: Product): void {
    product.open = false;
  }

  buyProduct(product: Product): void {
    if (product.availability > 0) {
      this.cart.numItems++;
      this.cart.price += product.price;
      product.availability--;
    }

  }

  empyCart(): void {      //aggiungere reset availability
    this.cart.numItems = 0;
    this.cart.price = 0;
  }
}
