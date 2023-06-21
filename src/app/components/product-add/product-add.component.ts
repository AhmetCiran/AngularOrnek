import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  // private formBuilder:FormBuilder oluşturma servisi
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductForm();
  }

  //oluşturulan formdaki validators kurallarını belirliyoruz.
  createProductForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
    })
  }

  add() {
    // Validayon doğrulamasında geçti ise
    if (this.productAddForm.valid) {
      // formdaki bilgileri obje haline getirmek için kullandık.
      let productModel = Object.assign({}, this.productAddForm.value)

      // productService observer olduğu için subscribe eklemeiz gerekli
      // mesajıda subscribe yazdık çünkü assenkron çalıştığı için.
      this.productService.add(productModel).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı")
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          }
        }
      })

    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }

  }

}
