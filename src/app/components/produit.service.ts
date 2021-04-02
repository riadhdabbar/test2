import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

import {map, publish, refCount} from "rxjs/operators";






const baseUrl = 'http://localhost:8080/api/product';
//const baseUrl = 'https://tech.dev.ats-digital.com/api/products';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  findByTitle(title: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${baseUrl}?title=${title}`);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  

}
