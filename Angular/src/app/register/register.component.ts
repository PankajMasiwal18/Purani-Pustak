import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers :[BackEndService]
})
export class RegisterComponent implements OnInit 
{

  RegisterForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.email,Validators.required]),
    mobile_number : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    local_address : new FormControl('', Validators.required),
    pin_code : new FormControl('', Validators.required),
    password  : new FormControl('', Validators.required),
  });


  constructor(private BackEndService : BackEndService,private router:Router) { }

  ngOnInit(): void {
  }

  RegisterFormSubmit(RegisterForm : any) 
  {
    if(!this.RegisterForm.valid ){
      console.log('Invalid Form'); 
      return;
    }
    else
    {
      this.BackEndService.postUserDetails(RegisterForm.value).subscribe((res) => 
      {
        for(let value in res)
        {
          var message =res[value];
        }
        if(message == "success")
        {
          this.router.navigate(['Login']);
          console.log("Registered");
        }
        else
        {
          console.log("Not Registered Because Of Server Error");
        }
      });
    }
  }
}
