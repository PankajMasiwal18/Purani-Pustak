import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BackEndService } from '../BackEnd/back-end.service'

@Component({
  selector: 'app-image-silder',
  templateUrl: './image-silder.component.html',
  styleUrls: ['./image-silder.component.css']
})
export class ImageSilderComponent implements OnInit {

  constructor(private BackEndService:BackEndService, private Router:Router) { }

  // Search = new FormGroup({
  //   search_input : new FormControl(""),
  // })

  ngOnInit(): void {
  }
  // BookDetail : any;
  // Search_Book(Search:any)
  // {
  //   this.BackEndService.Search(Search.value).subscribe(
  //     res=>
  //     {
  //       for(let i in res)
  //       {
  //         this.BookDetail = res[i];
  //       }
  //       this.BackEndService.SetBookDetial(this.BookDetail);
  //       this.Router.navigate(['Show_Book']);
  //     console.log(this.BookDetail);
  //     }
  //   );
  // }
}

