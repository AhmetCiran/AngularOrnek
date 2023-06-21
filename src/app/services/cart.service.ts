import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';
import { CartItem } from 'src/app/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
 
  addToCart(product:Product){
    // eklenen ürün sepette var mı onu kontrol ediyoruz.
    // varsa quantity 1 arttırıyoruz.

    let item=CartItems.find(c=>c.product.productId===product.productId)
    if(item){
      item.quantity+= 1;
    }else{
      // Sepete ürün ekleme işlemi yapıyoruz.
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  // sepeteteki bilgileri okumak için kullanıyoruz.
  list():CartItem[]{
    return CartItems;
  }

  removeFromCart(product:Product){
    let item:any=CartItems.find(c=>c.product.productId===product.productId)
     // Dizide belirlenen yerden itibaren 1 tane sil anlamında
    CartItems.splice(CartItems.indexOf(item),1)


  }
}
