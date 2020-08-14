import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [BackEndService]
})
export class LoginComponent implements OnInit 
{

  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.email,Validators.required]),
    password : new FormControl('',Validators.required)
  })

  constructor(private BackEndService:BackEndService,private router:Router) { }


  ngOnInit(): void {}
  allow=true;
  LoginFormSubmit(LoginForm : any)
  {
    if(!this.LoginForm.valid)
    {
      console.log('Invalid');
      return;
    }
    else
    {
      this.BackEndService.postLogin(LoginForm.value).subscribe((res:any)=>
      {
        console.log("test");
        for(let value in res)
        {
          var token = res[value];
        }
        console.log(token);
        console.log("test");
        this.BackEndService.setToken(token);
        var message = "Login Success";
        if(message == "User Does Not Exist")
        {
          console.log("User Does Not Exist");
        }
        if(message == "Error Occure In Server Side")
        {
          console.log("Error Occure In Server Side");
        }
        if(message == "Incorrect Password")
        {
          console.log("Incorrect Password");
        }
        if(message == "Login Success")
        {
          console.log("Login Success");
         this.router.navigate(['Front_Page']);
        // this.BackEndService.Set_Allowed_Or_Not(this.allow);
        }
      }
      )
    }  
  } 
}



