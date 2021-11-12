import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopContainerComponent } from './modules/core/container/shop-container/shop-container.component';
import { ShopCardComponent } from './modules/core/components/shop-card/shop-card.component';
import { ShopDetailComponent } from './modules/core/components/shop-detail/shop-detail.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ShopCartComponent } from './modules/core/components/shop-cart/shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopContainerComponent,
    ShopCardComponent,
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
