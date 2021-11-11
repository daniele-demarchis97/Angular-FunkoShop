import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopContainerComponent } from './core/shop-container/shop-container.component';
import { ShopListComponent } from './core/shop-container/components/shop-list/shop-list.component';
import { ShopDetailComponent } from './core/shop-container/components/shop-detail/shop-detail.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ShopCartComponent } from './core/shop-container/shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopContainerComponent,
    ShopListComponent,
    ShopDetailComponent,
    NavBarComponent,
    ShopCartComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
