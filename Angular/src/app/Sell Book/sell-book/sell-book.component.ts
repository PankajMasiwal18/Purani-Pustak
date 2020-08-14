import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { BackEndService } from 'src/app/BackEnd/back-end.service';

@Component({
  selector: 'app-sell-book',
  templateUrl: './sell-book.component.html',
  styleUrls: ['./sell-book.component.css']
})
export class SellBookComponent implements OnInit {


  constructor(private BackEndService:BackEndService , private router:Router) { }
  
  ngOnInit(): void {}
  
  IfLoggedIn()
  {
    console.log("x ki value");
   var x =this.BackEndService.isLoggedIn();
    // var check=this.BackEndService.BookDetail().subscribe();
    
   console.log(x);
   //return !x;
  }

  // check()
  // {
  //   var x =this.BackEndService.isLoggedIn();
  //   if(x == true)
  //   {
  //     this.router.navigate(['BookDetail']);
  //   }
  //   return x;
  // }
}
