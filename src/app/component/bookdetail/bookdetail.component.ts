import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/modal/book';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(private bookservice:BookserviceService,private router: Router) { }  
  
  book : Book=new Book();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  booksaveform=new FormGroup({  
    book_title:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
    book_author:new FormControl('',[Validators.required,Validators.email]),  
    book_price:new FormControl()  
  });  
  
  savebook(){  
    this.book=new Book();     
    this.book.title=this.bookName.value;  
    this.book.author=this.bookAuthor.value;  
    this.book.price=this.bookPrice.value;  
    this.submitted = true;  
    this.save();  
    
    this.router.navigate([`/detail-component`]);
    // setTimeout(() => {
    //  }, 3000);
    
  }  
  
    
  
  save() {  
    this.bookservice.createbook(this.book)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.book = new Book();  
  }  
  
  get bookName(){  
    return this.booksaveform.get('book_title');  
  }  
  
  get bookAuthor(){  
    return this.booksaveform.get('book_author');  
  }  
  
  get bookPrice(){  
    return this.booksaveform.get('book_price');  
  }  
  
  addbookForm(){  
    this.submitted=false;  
    // this.booksaveform.reset();  
  }  
}  

