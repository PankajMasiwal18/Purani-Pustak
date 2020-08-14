import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { BackEndService } from 'src/app/BackEnd/back-end.service';
import { SetGetService} from 'src/app/BackEnd/set-get.service';

@Component({
  selector: 'app-buy-book-detail',
  templateUrl: './buy-book-detail.component.html',
  styleUrls: ['./buy-book-detail.component.css']
})
export class BuyBookDetailComponent implements OnInit {

  constructor(private BackEndService:BackEndService , private Router:Router,private SetGetService:SetGetService) { }

  BookDetail:any;
  BookID:any;

  Book_Quantity = new FormGroup({
    Book_Quantity: new FormControl('')
  })

  ngOnInit(): void {
    this.BookDetail = (this.BackEndService.getBookDetail());
    this.BookID=this.BackEndService.getBookID();
  }

  getBookDetail(value)
  {console.log("value from show..... book");
    console.log(value);
    this.BookDetail = value;
  }
  sendBookDetail:any;
  sendQuantity:Number;
  quantity(Book_Quantity:any,_id:String,_BookDetail)
  {
    this.CorrectQuantity =true;
    console.log("check quantity method");
    console.log(Book_Quantity.value.Book_Quantity);
    this.sendQuantity=Book_Quantity.value.Book_Quantity;
    console.log(_id);
    console.log(_BookDetail);
    for(let i in _BookDetail)
    {
      console.log(_BookDetail[i]);
      let q=_BookDetail[i];
      console.log(q._id);
      if(_id == q._id)
      {
        this.sendBookDetail=q;
      }
    }
    console.log("this.sendBookDetail");
    console.log(this.sendBookDetail);
    this.SetGetService.setValueForShoppingCard(this.sendQuantity, _id,this.sendBookDetail);
   // this.Router.navigate(['Shopping_Cart']);
  }

maxValue=5;

  check(id)
  {
    if(id == this.BookID)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  checkOut()
  {
    this.Router.navigate(['Shopping_Cart']);
  }

  onKey(event , Quantity ,_id:String,_BookDetail)
  {
    console.log(event);
    console.log(event.key);
    console.log(Quantity);
    let getQuantity:Number = event.key;
    if(getQuantity <=   Quantity)
    {
      this.CorrectQuantity =true;
      this.sendQuantity = event.key;
      // for(let i in _BookDetail)
      // {
      //   console.log(_BookDetail[i]);
      //   let q=_BookDetail[i];
      //   console.log(q._id);
      //   if(_id == q._id)
      //   {
      //     this.sendBookDetail=q;
      //   }
      // }
      // this.SetGetService.setValueForShoppingCard(this.sendQuantity, _id,this.sendBookDetail);    
    }
    else
    {
      console.log("event coorect quantity");
      this.CorrectQuantity =false;
    }
  }

  onClick(event , Quantity)
  {
    console.log(event.target.value);
    let getQuantity:Number = event.target.value;
    if(getQuantity <=   Quantity)
    {
      this.CorrectQuantity =true;
      
    }
    else
    {
      console.log("event coorect quantity");
      this.CorrectQuantity =false;
    }
    
    
  }

  CorrectQuantity =false;

  IfCorrectQuantity()
  {
    return this.CorrectQuantity;
  }
}
