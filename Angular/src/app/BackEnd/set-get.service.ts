import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, from , throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Add_Book } from './add-book.model'

@Injectable({
  providedIn: 'root'
})
export class SetGetService {

  constructor(private http : HttpClient) { }

  value;
  Update(id)
  {console.log("update");
    return this.http.get(`http://127.0.0.1:3000/Search/update/${id}`).
    pipe(
      map((data:Add_Book[])=>{
        console.log("back end side")
        console.log(data);
        return data;
      }),catchError(err =>{
        return throwError("Something went wrong!");
      })
    );
    // console.log("update update ");
    // console.log(this.value);
    // return this.value;
  }

  sendQuantity=[];
  IDs=[];
  _BookDetail=[];
  setValueForShoppingCard(sendQuantity,id,_BookDetail)
  {console.log("setValueForShoppingCard");
    console.log(sendQuantity);
    console.log(id);

    if(this.IDs.length == 0)
    {
      this.IDs.push(id);
      this.sendQuantity.push({q:sendQuantity});
      this._BookDetail.push(_BookDetail);
    }
    if(this.IDs.length > 0)
    {
      var flag=0;
      for(let i=0; i<=this.IDs.length; i++)
      {console.log("id from service ");
        if(this.IDs[i] == id)
        {
          flag++;
        }
      }
      if(flag == 0)
      {
        this.IDs.push(id);
        this.sendQuantity.push({q:sendQuantity});
        this._BookDetail.push(_BookDetail);
      }
    }
    
    //console.log("id from service ");
   // console.log(this.IDs.length);
    console.log(this.sendQuantity);
    //this.IDs.push(id);

  }

  getValueOfIDForShoppingCard()
  {
    return (this.IDs);
  }

  getValueOfQuantityForShoppingCard()
  {
    return (this.sendQuantity);
  }

  getValueOf_BookDetailForShoppingCard()
  {
    return (this._BookDetail);
  }

  DeleteItem(index)
  {
    console.log("index of...");
    console.log(index);

    this._BookDetail.splice(index,1);
    this.IDs.splice(index,1);
    this.sendQuantity.splice(index,1);
  }
}
