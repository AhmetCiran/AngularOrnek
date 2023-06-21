import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = []
  //Burada verilen hataı gidermek için
  // tsConfig.json dosyası içerisine  "strict": true,nun altına   "strictPropertyInitialization": false, yazılır.
  currentCategory: Category;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    // getProducts().subscribe((response=>{ assenkron çalışıyor. onun için bu işlemleri yaptık.
    this.categoryService.getCategories().subscribe((response => {
      this.categories = response.data
    }))
  }
  
  // Hangi kategori seçili onu tespit etmek için kullanılır.
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  //Bu fonksiyon o an hangi kategoriseçili ise zemin rengini değiştirmek için kullandık.
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }else
    {
      return "list-group-item"
    }
  }

  getAllClass(){
    if(!this.currentCategory){
      return "list-group-item active "
    }else{
      return "list-group-item "
    }
  }

  setCurrentAllCategory(){
      this.currentCategory = {
      "categoryId":0, 
      "categoryName":""}
  }

}
