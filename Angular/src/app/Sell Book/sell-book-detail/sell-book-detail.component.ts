import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router'

import { BackEndService } from 'src/app/BackEnd/back-end.service';

// import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-sell-book-detail',
  templateUrl: './sell-book-detail.component.html',
  styleUrls: ['./sell-book-detail.component.css']
})
export class SellBookDetailComponent implements OnInit {

  BookDetailForm = new FormGroup({
    Tittle : new FormControl(''),
    Author : new FormControl(''),
    Edition : new FormControl(''),
    Expected_Amount : new FormControl(''),
  });
  username:String='';
  constructor(private BackEndService:BackEndService , private router:Router) {}

  // userDetails;
 // allow;
  ngOnInit(): void {
    console.log("bookdetail mai hu");
    // this.BackEndService.BookDetail().subscribe(
    //   res => {
    //     console.log("check");
    //     console.log(res);
    //     this.userDetails = res['user'];
    //   },
    //   err => { 
    //     console.log("bhai mughai lagta hai ki bookdetails mai error hai kuch");  
    //   }
    //);

  //  this.allow= (this.BackEndService.Get_Allowed_Or_Not());
  }

  // check()
  // {
  //   return this.allow;
  // }

  onSubmit(RegisterForm : any) 
  {
    console.log("working");
    console.log(RegisterForm.value);
    this.BackEndService.postUserDetails(RegisterForm.value).subscribe((res) => {
      for(let value in res)
      {
        var message =res[value];
      }
      if(message == "success")
      {
        console.log("Registered");
      }
      else
      {
        console.log("Not Registered");
      }
   });
  }

  Logout(){
    this.BackEndService.deleteToken();
    this.router.navigate(['/Login_Or_Register']);
  }
}
