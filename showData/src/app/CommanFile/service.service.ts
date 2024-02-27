import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url='https://dummyjson.com/products'
  private apiUrl = 'https://dummyjson.com/products';
  
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

}
