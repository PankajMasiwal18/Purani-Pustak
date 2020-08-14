import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

import { BackEndService } from 'src/app/BackEnd/back-end.service'

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})

// ######################################################################
//                  2nd step hai book ko buy kerne k leye 
// ######################################################################


export class ShowBookComponent implements OnInit {

  constructor(private BackEndService : BackEndService, private Router:Router) { }

  BookDetail:any;
  ngOnInit(): void {
   this.BookDetail = (this.BackEndService.getBookDetail());
   console.log("pankaj...");
   console.log(this.BookDetail);
  }

  getBookDetail(value)
  {console.log("value from show book");
    console.log(value);
    this.BookDetail = value;
  }


  // jiss book ko select kiya ush ki id ko ko Buy_Book_Detail ko send ker dega
  BuyBook(id)
  {
    console.log("BuyBook");
    console.log(id);
    this.BackEndService.setBookID(id);
    this.Router.navigate(['Buy_Book_Detail']);
  }
}
