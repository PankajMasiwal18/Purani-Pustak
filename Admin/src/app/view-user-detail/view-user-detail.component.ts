import { Component, OnInit } from '@angular/core';

import { BackEndService } from '../back-end/back-end.service'
@Component({
  selector: 'app-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {

  constructor(private BackEndService: BackEndService) { }

  ngOnInit(): void {
  }

  details;
  value()
  {
    this.BackEndService.ViewUserDetail().subscribe(
      (res)=>{
        for(let value in res)
        {
          this.details=res[value];
        }
      }
    );
  }

}
