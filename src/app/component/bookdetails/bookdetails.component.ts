import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(private bookservice:BookserviceService) { }

  rowData = [];
  ngOnInit(): void {
    this.rowData=[];
    this.bookservice.getBookList().subscribe(data =>{  
      this.rowData =data;   
      })  
  }


  columnDefs = [
    { field: 'title' },
    { field: 'author' },
    { field: 'price'}
];



}
