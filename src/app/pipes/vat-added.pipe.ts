import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  // value: number, rate:number ilk değer yani value değiştirmek istediğimiz.
  // 2. değer parametre ile gelen 2. değer yerinde daha önceden ...args unknow[] yazıyordu sildik.
  // birden fala parametre varsa rate:number dan sonra virgül atıp aynı şekilde tanımlarız. 
  // rate:number, y:number gibi.
  transform(value: number, rate:number): number {
    return value+(value*10/100);
  }

}
