import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products: Product[] = [];
  dataLoaded = false;
  filterText="";

  // URL den parametre okumak için  private activatedRoute:ActivatedRoute kullandık
  constructor(private productService: ProductService, 
              private activatedRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private cartService:CartService) { }

  ngOnInit(): void {
    // Url de parametre var mı yokmu kontrol ediyoruz.
    // eğer observable diye bişey döndürüyorsa mutlaka subscribe kullanmak lazım.

    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts()
      }
    })
  }

  getProducts() {
    // getProducts().subscribe((response=>{ assenkron çalışıyor. onun için bu işlemleri yaptık.
    this.productService.getProducts().subscribe((response => {
      this.products = response.data
      this.dataLoaded = true
    }))
  }

  getProductsByCategory(categoryId: number) {
    // getProducts().subscribe((response=>{ assenkron çalışıyor. onun için bu işlemleri yaptık.
    this.productService.getProductsByCategory(categoryId).subscribe((response => {
      this.products = response.data
      this.dataLoaded = true
    }))
  }

  addToCart(product:Product){
    this.cartService.addToCart(product)
    this.toastrService.success("Sepete eklendi",product.productName)
  }
}
