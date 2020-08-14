import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BackEndService } from '../back-end/back-end.service'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  images;
  public obj: any = {};
  AddBookForm = new FormGroup({
    Book_Name: new FormControl('', [Validators.email, Validators.required]),
    Book_Author_Name: new FormControl('', Validators.required),
    Price: new FormControl('', Validators.required),
    Quantity: new FormControl('', Validators.required),
  })

  constructor(private BackEndService: BackEndService, private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.AddBookForm = this.FormBuilder.group({
      Book_Name: [""],
      Book_Author_Name: [""],
      Price: [""],
      Quantity:[""]
    });
  }

  onFileSelected(event) {
    this.images = event.target.files[0];
  }

  AddBook(AddBookForm) {
    this.BackEndService.postAddBook(this.images, AddBookForm).subscribe();
  }
}