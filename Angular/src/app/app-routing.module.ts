import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';
import { SellBookComponent } from './Sell Book/sell-book/sell-book.component';
import { FrontPageComponent} from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SellBookDetailComponent } from './Sell Book/sell-book-detail/sell-book-detail.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { ShowBookComponent } from './Buy Book/show-book/show-book.component';
import { BuyBookDetailComponent } from './Buy Book/buy-book-detail/buy-book-detail.component';
import { ShoppingCartComponent } from './Buy Book/shopping-cart/shopping-cart.component';
import { MakePaymentComponent } from './Buy Book/make-payment/make-payment.component'
import { PayForBookComponent } from './Buy Book/pay-for-book/pay-for-book.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'Login_Or_Register',
    pathMatch:'full'
  },
  {
    path:'Login_Or_Register',
    component:LoginOrRegisterComponent
  },
  {
    path:'Sell_Book',
    component:SellBookComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'SellBookDetail',
    component:SellBookDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Contact',
    component:ContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Front_Page',
    component:FrontPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Show_Book',
    component:ShowBookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Buy_Book_Detail',
    component:BuyBookDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Shopping_Cart',
    component:ShoppingCartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Make_Payment',
    component:MakePaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'Pay_For_Book',
    component:PayForBookComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
