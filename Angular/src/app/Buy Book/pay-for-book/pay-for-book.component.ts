import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { BackEndService } from 'src/app/BackEnd/back-end.service';

@Component({
  selector: 'app-pay-for-book',
  templateUrl: './pay-for-book.component.html',
  styleUrls: ['./pay-for-book.component.css']
})
export class PayForBookComponent implements OnInit {

  constructor(private BackEndService:BackEndService , private router:Router) { }

  ngOnInit(): void {
   
    console.log("x ki value");
   var x =this.BackEndService.isLoggedIn();
    
   if(x== true)
   {
         this.router.navigate(['Make_Payment']);
   }
  //  else
  //  {
     
  //  }
  
  }

  IfLoggedIn()
  {
    console.log("x ki value");
   var x =this.BackEndService.isLoggedIn();
    // var check=this.BackEndService.BookDetail().subscribe();
    
   console.log(x);
   if(x== false)
   {
    return !x;
   }
  }

  

  // IfNotLoggedIn()
  // {
  //   console.log("x=y ki value");
  //   this.router.navigate(['Make_Payment']);
  // }

}
