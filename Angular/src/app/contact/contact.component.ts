import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import {Router} from '@angular/router'

import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  FeedBackForm = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    message: new FormControl(''),
  });


  constructor(private BackEndService: BackEndService , private router:Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(FeedBackForm: any)
  {
    console.log("working");
    this.BackEndService.postUserDetails(FeedBackForm.value).subscribe((res) => {
      for (let value in res) {
        var message = res[value];
        //console.log(message);
      }
      if (message == "success")
      {
        // this.router.navigate(['Login']);
        console.log("Registered");
      }
      else 
      {
        console.log("Not Registered");
      }
    });
  }

  // IfLoggedIn()
  // {
  //   this.BackEndService.isLoggedIn();
  //   // var check=this.BackEndService.BookDetail().subscribe();
  //   // console.log(check);
  // }

  // IfNotLoggedIn()
  // {
  //   this.router.navigate(['Contact']);
  // }
}
