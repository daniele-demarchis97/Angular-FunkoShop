import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() cart!: Product[];
  @Input() totalCart!: number;
  @Input() productReset!: Product;
  @Output() emptyCart = new EventEmitter<Product[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
