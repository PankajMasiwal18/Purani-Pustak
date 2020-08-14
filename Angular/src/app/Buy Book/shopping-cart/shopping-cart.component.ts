import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { BackEndService } from 'src/app/BackEnd/back-end.service';
import { SetGetService } from 'src/app/BackEnd/set-get.service'
import { SummaryResolver } from '@angular/compiler';

var Razorpay:any;

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private BackEndService: BackEndService, private SetGetService: SetGetService) {
    this.getScreenSize();
   }

  BookDetail;

  sendQuantitys;
  ID_s;
  value;
  changeQuantity;
  screenHeight: number;
  screenWidth: number;
 // totalPrice:Number = 0;
  ngOnInit(): void {
    this.sendQuantitys = (this.SetGetService.getValueOfQuantityForShoppingCard());
    this.ID_s = (this.SetGetService.getValueOfIDForShoppingCard());
    this.BookDetail = (this.SetGetService.getValueOf_BookDetailForShoppingCard());
    // this.BookDetail.push(this.sendQuantitys);

    console.log(this.ID_s);
    console.log(this.sendQuantitys);
    console.log(this.BookDetail);

  }


  onKey(event , id)
  {
    console.log(event);
    console.log(event.key);
    console.log(id);
    for (let i of this.ID_s) {
  
      if (i == id) {
        let index = this.ID_s.indexOf(id);
        this.sendQuantitys[index].q = event.key;
      }
    }
  }

  onClick(event , id)
  {
    console.log(id);
    console.log(event.target.value);
    for (let i of this.ID_s) {
  
      if (i == id) {
        let index = this.ID_s.indexOf(id);
        this.sendQuantitys[index].q = event.target.value;
      }
    }
  }

  check(id) {
    var x = 0;
    console.log(this.ID_s);
    for (let i of this.ID_s) {
      // console.log("ids");
      // console.log(i);
      if (i == id) {
        x = 1;
        //   console.log(this.ID_s.indexOf(id));
        let index = this.ID_s.indexOf(id);
        this.value = this.sendQuantitys[index].q;
        return true;
      }
    }
    if (x == 0) {
      return false;
    }
  }

  sum() {
    var totalPrice=0;
    if (this.BookDetail.length > 0) {
      console.log(totalPrice);
      for (let i = 0; i < this.BookDetail.length; i++) {
        totalPrice += (this.BookDetail[i].Price * this.sendQuantitys[i].q);
      }
      this.SumOfBookPrice=totalPrice;
      return true;
    }
    else {
      return false;
    }
  }
SumOfBookPrice;
  Delete(id) {
    console.log("delete function");

    for (let i of this.ID_s) {
      if (i == id) {
        let index = this.ID_s.indexOf(id);
        console.log(index);
        this.SetGetService.DeleteItem(index);
      }
    }


  }

  pay()
  {
    console.log("pankaj masiwal ...");

    var params = {
      amount:this.SumOfBookPrice,
      currency:'INR',
      receipt:"order_rcptid_11",
      payment_capture:'1'
    };
    this.BackEndService.Order_id(params).subscribe(
      res=>
      {
        console.log(res);
      }
    );  
  }


  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
          console.log(this.screenHeight, this.screenWidth);
    }

  width767()
    {
      if(this.screenWidth >=767)
      {
        return false;
      }
      else
      {
        return true;
      }
    }

    width991()
    {
      if(this.screenWidth >=768 )
      {
        return true;
      }
      else
      {
        return false;
      }
    }
}