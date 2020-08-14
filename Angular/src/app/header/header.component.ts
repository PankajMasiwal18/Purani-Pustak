import { Component, OnInit ,  Output, EventEmitter } from '@angular/core';
import { HostListener } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { BackEndService } from '../BackEnd/back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private BackEndService:BackEndService , private Router:Router) {
    this.getScreenSize();
   }

   @Output() Header_Output : EventEmitter<any> = new EventEmitter();

   Search = new FormGroup({
    search_input : new FormControl(""),
  })

  BookDetail : any;
  screenHeight: number;
  screenWidth: number;

  ngOnInit(): void {
  }


    Search_Book(Search:any)
  {
    console.log("search"); console.log(Search.value);
    this.BackEndService.Search(Search.value).subscribe(
      res=>
      {
        for(let i in res)
        {
          this.BookDetail = res[i];
        }
        console.log(this.BookDetail);
        this.Header_Output.emit(this.BookDetail);
        this.BackEndService.SetBookDetial(this.BookDetail);
       this.Router.navigate(['Show_Book']);
      // console.log(this.BookDetail);
      }
    );
  }

  Search_Again()
  {
    console.log("masiwal...");
    // this.Router.navigate(['Front_Page']);
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
      if(this.screenWidth >=768 && this.screenWidth <=991)
      {
        return true;
      }
      else
      {
        return false;
      }
    }

    width992()
    {
      if(this.screenWidth >=992)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
}
