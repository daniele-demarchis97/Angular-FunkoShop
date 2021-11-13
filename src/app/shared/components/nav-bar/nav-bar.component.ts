import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'ngbd-app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
  .card.disabled {
    opacity: 0.5;
  }
`]
})
export class NgbdNavBarComponent implements OnInit {

  disabled = false;

  @Input() products!: Product[];
  @Input() cart!: Product[];
  @Input() totalCart!: number;
  @Input() productReset!: Product;
  @Output() emptyCart = new EventEmitter<Product[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
