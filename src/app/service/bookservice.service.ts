import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private baseUrl = 'http://localhost:8080/';  
  
  constructor(private http:HttpClient) { }  
  
  getBookList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'fetchAll');  
  }  
  
  createbook(student: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'save', student);  
  
}
}