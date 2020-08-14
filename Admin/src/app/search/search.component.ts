import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators  } from '@angular/forms';

import { BackEndService } from '../back-end/back-end.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private BackEndService:BackEndService) { }


  Search = new FormGroup({
    search_input : new FormControl(""),
  })

  employeeForm={
    Book_Name:'',
    Book_Author_Name:'',
    Price:'',
    Quantity:''
  }

  BookDetail;
  value=true;
  Book_Name:'';
  Book_Author_Name:'';
  Price:'';
  Quantity:'';
  id='';

  ngOnInit(): void {
  }
  Search_Book(Search:any)
  {
    this.BackEndService.Search(Search.value).subscribe(
      res=>
      {
        for(let i in res)
        {
          this.BookDetail = res[i];
        }
      }
    );
  }

  edit(id)
  {
    this.id=id;
    this.value = false;
    this.BackEndService.Edit_Book_Detail(id).subscribe((data:any) => 
    {
      this.Book_Name = data.value.Book_Name;
      this.Book_Author_Name = data.value.Book_Author_Name;
      this.Price = data.value.Price;
      this.Quantity = data.value.Quantity;
    });      
  }

  Update(employeeForm:any)
  {
    this.BackEndService.Update(employeeForm.value,this.id).subscribe();
    this.value=true;
  }
}
