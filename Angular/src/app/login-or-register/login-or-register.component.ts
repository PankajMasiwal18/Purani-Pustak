import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {Component} from '@angular/core';

import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {

  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required)
  })

  RegisterForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile_number: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    local_address: new FormControl('', Validators.required),
    pin_code: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private BackEndService: BackEndService, private router: Router) { }

  ngOnInit(): void {
  }

  Login_Button = true;
  Show_Image = true;
  Login_Message;
  Register_Message;

  Image() {
    return this.Show_Image;
  }

  Login() {
    this.Login_Button = true;
    this.Show_Image = true;
  }

  Register() {
    this.Login_Button = false;
    this.Show_Image = false;
  }

  Check_Login_Register() {
    return this.Login_Button;
  }

  LoginFormSubmit(LoginForm: any) {
    if (!this.LoginForm.valid) {
      this.Login_Message = 'Invalid Form , Please Fill All Field Correctly .';
      return;
    }
    else {
      this.BackEndService.postLogin(LoginForm.value).subscribe((res: any) => {
        for (let value in res) {
          var token = res[value];
        }
        if (token == "User_Does_Not_Exist") {
          this.Login_Message = "User Does Not Exist";
        }
        else if (token == "Error_Occure_In_Server_Side") {
          this.Login_Message = "Error Occure In Server Side";
        }
        else if (token == "Worng_Password") {
          this.Login_Message = "Incorrect Password";
        }
        else {
          this.BackEndService.setToken(token);
          this.router.navigate(['Front_Page']);
        }
      }
      )
    }
  }

  RegisterFormSubmit(RegisterForm: any) {
    if (!this.RegisterForm.valid) {
      this.Register_Message = "Invalid Form , Please Fill All Field Correctly ."
      return;
    }
    else {
      this.BackEndService.postUserDetails(RegisterForm.value).subscribe((res) => {
        for (let value in res) {
          var message = res[value];
        }
        if (message == "success") {
          this.Register_Message = "Register SuccessFully ."
        }
        if (message == "Duplicate") {
          this.Register_Message = "User All Ready Exits ."
        }
        if (message == "Server_Error") {
          this.Register_Message = "Not Registered Because Of Server Error ."
        }
      });
    }
  }

  Register_Message_Color() {
    if (this.Register_Message == "Register SuccessFully .") {
      return false;
    }
    else {
      return true;
    }
  }
}
