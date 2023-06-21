import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

// value: Product[] yazdık çünkü tablo filtreleneceği için

  transform(value: Product[], filterText:string): Product[] {
    filterText=filterText?filterText.toLowerCase():""
    return filterText?value.
    filter((p:Product)=>p.productName.toLowerCase().indexOf(filterText)!==-1):value
  }

}
