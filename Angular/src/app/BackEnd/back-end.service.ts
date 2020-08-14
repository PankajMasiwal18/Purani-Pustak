import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


import { Login } from './login.model';
import { Register } from './register.model';


function _window(): any {
  // return the global native browser window object
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  RegisterData : Register;
  LoginData : Login;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http : HttpClient) { }

  get nativeWindow(): any {
    return _window();
  }

  postUserDetails(RegisterData : Register)
  {
    return this.http.post("http://localhost:3000/Register", RegisterData, this.noAuthHeader);
  }

  postLogin(LoginData : Login)
  {
    return  this.http.post("http://localhost:3000/Login", LoginData, this.noAuthHeader);
  }

  // BookDetail()
  // {
  //   return this.http.get('http://127.0.0.1:3000/Login/BookDetail');
  // }

  Search(SearchData :String)
  {console.log(SearchData);
    return this.http.post('http://127.0.0.1:3000/Search',SearchData);
  }

  Order_id(params)
  {console.log("1");
    return this.http.post('http://127.0.0.1:3000/Razorpay/Order_Id',params);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return true;
    else
      return false;
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  BookDetails:any;
  
  SetBookDetial(SetBookDetial:any)
  {
    console.log("setbookdetails     "+SetBookDetial.value);
    this.BookDetails=SetBookDetial;
  }

  getBookDetail()
  {
    if(this.BookDetails)
    {
      return this.BookDetails;
    }
  }

  setBookId:any;
  setBookID(id)
  {
    this.setBookId=id;
  }

  getBookID()
  {
    return this.setBookId;
  }
  
}
