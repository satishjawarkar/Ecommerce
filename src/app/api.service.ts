import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map}from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
    // loding checking time
    console.log('Service Module Loaded')
   }
  getProduct():Observable<any>
  {
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
