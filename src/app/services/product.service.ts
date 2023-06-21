import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //apiUrl = "http://localhost:8080/api/"
  apiUrl="https://localhost:44314/api/"

  constructor(private httpClient: HttpClient) { }

  //Observable<ProductResposeModel> türünde method olduğunu
  getProducts(): Observable<ListResponseModel<Product>> {
    // Bu kod api den gelen bilgileri ProductResposeModel içerisine ekle demek.
    // Bu işlemi yaptıktan sonra app.module.ts içerisine git ve
    // import { HttpClientModule } from '@angular/common/http'; en üst satıra ekle ve
    // imports:[ BrowserModule, AppRoutingModule, HttpClientModule] un altına HttpClientModule ekle.

    let newPath = this.apiUrl + "products/getAll";

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  //Observable<ProductResposeModel> türünde method olduğunu
  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> {
    // Bu kod api den gelen bilgileri ProductResposeModel içerisine ekle demek.
    // Bu işlemi yaptıktan sonra app.module.ts içerisine git ve
    // import { HttpClientModule } from '@angular/common/http'; en üst satıra ekle ve
    // imports:[ BrowserModule, AppRoutingModule, HttpClientModule] un altına HttpClientModule ekle.
    //let newPath = this.apiUrl + "products/getProductWithCategoryDetails?categoryId=" + categoryId;
    let newPath = this.apiUrl + "products/getProductByCategoryId?categoryid=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  // Observable<ResponseModel>  bununla dönen sonucun obje olmasın sağladık
  // back end tarafında gelen mesajı bie verir.
  add(product: Product) :Observable<ResponseModel>  {
     return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product,)
  }

}
