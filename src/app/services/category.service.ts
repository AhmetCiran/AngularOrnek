import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //apiUrl = "http://localhost:8080/api/categories/getAll"
  apiUrl="https://localhost:44314/api/categories/getAll"


  constructor(private httpClient: HttpClient) { }

  //Observable<ProductResposeModel> türünde method olduğunu
  getCategories(): Observable<ListResponseModel<Category>> {
    // Bu kod api den gelen bilgileri ProductResposeModel içerisine ekle demek.
    // Bu işlemi yaptıktan sonra app.module.ts içerisine git ve
    // import { HttpClientModule } from '@angular/common/http'; en üst satıra ekle ve
    // imports:[ BrowserModule, AppRoutingModule, HttpClientModule] un altına HttpClientModule ekle.

    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
