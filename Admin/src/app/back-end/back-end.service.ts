import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Add_Book } from './add-book.model'
// import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {


  constructor(private http: HttpClient) { }

  postAddBook(images, LoginForm) {
    const formData = new FormData();
    formData.append('Image', images);
    formData.append('Book_Name', LoginForm.controls.Book_Name.value);
    formData.append('Book_Author_Name', LoginForm.controls.Book_Author_Name.value);
    formData.append('Price', LoginForm.controls.Price.value);
    formData.append('Quantity', LoginForm.controls.Quantity.value);
    return this.http.post('http://127.0.0.1:3000/Admin/AddBook', formData);
  }

  ViewUserDetail()
  {
    return this.http.get('http://127.0.0.1:3000/Admin/ViewUserDetail');
  }

  Search(SearchData :String)
  {console.log(SearchData);
    return this.http.post('http://127.0.0.1:3000/Search',SearchData);
  }

  Edit_Book_Detail(id:string)
  {console.log("id   "+id);
    return this.http.get(`http://localhost:3000/Search/Edit_Book_Detail/${id}`).
    pipe(
      map((data:Add_Book[])=>{
        console.log("back end side")
        console.log(data);
        return data;
      }),catchError(err =>{
        return throwError("Something went wrong!");
      })
    );
  }

  Update(value,id)
  {
    return this.http.post(`http://127.0.0.1:3000/Search/update/${id}`,value);
  }
}

