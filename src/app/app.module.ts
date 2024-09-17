import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product_listing/product.component';
import { BoughtComponent } from './components/bought/bought.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CommentComponent } from './components/comment/comment.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserComponent } from './components/user/user.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    BoughtComponent,
    CartComponent,
    CategoryComponent,
    CommentComponent,
    ConfigurationComponent,
    GalleryComponent,
    UserComponent,
    WishlistComponent,
    LandingPageComponent,
    ProductDetailsComponent,
    WishlistPageComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
