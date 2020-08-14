import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ImageSilderComponent } from './image-silder/image-silder.component';
import { SellBookComponent } from './Sell Book/sell-book/sell-book.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SellBookDetailComponent } from './Sell Book/sell-book-detail/sell-book-detail.component';
import { ContactComponent } from './contact/contact.component';
import { BackEndService } from './BackEnd/back-end.service';
import { AuthGuard } from './auth-guard/auth.guard';
// import { AuthInterceptor } from './auth-guard/auth.interceptor';
import { ShowBookComponent } from './Buy Book/show-book/show-book.component';
import { BuyBookDetailComponent } from './Buy Book/buy-book-detail/buy-book-detail.component';
import { ShoppingCartComponent } from './Buy Book/shopping-cart/shopping-cart.component';
import { MakePaymentComponent } from './Buy Book/make-payment/make-payment.component';
import { PayForBookComponent } from './Buy Book/pay-for-book/pay-for-book.component';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ImageSilderComponent,
    SellBookComponent,
    FrontPageComponent,
    SellBookDetailComponent,
    ContactComponent,
    ShowBookComponent,
    BuyBookDetailComponent,
    ShoppingCartComponent,
    MakePaymentComponent,
    PayForBookComponent,
    LoginOrRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BackEndService , AuthGuard,
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptor,
  //   multi: true
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
