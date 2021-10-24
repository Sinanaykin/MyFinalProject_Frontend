import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){//sepete eklemek istediğimiz şey product onu belirttik model adını

    let item =CartItems.find(c=>c.product.productId===product.productId);//item tanımladık bir tane sepete ekliceğimiz ürün olarak düşün .Gönderdiğimiz(seçtiğimiz) ürün id si cartItems daki (sepet deki) ürün id sine eşitse yani sepette aynı üründen var mı
    if (item) { //eğer aynı üründen varsa sepette
      item.quantity+=1;//quantity yi yani sepetteki ürün sayısını 1 arttır diyoruz
    }else{//eğer yoksa CartItems a eklememiz lazım

      let cartItem=new CartItem();//cartItem classı olusturduk
      cartItem.product=product;//ürün ekleme
      cartItem.quantity=1;//sayıyı 1 arttırma
      CartItems.push(cartItem);//CartItems içine cartItem ı gönderiyoruz
    }

  }
  removeFromCart(product:Product){//yine bir product ver dicez bize onu sepetten silelim dicez
    let item:CartItem =CartItems.find(c=>c.product.productId===product.productId);//item tanımladık bir tane sepete ekliceğimiz ürün olarak düşün .Gönderdiğimiz(seçtiğimiz) ürün id si cartItems daki (sepet deki) ürün id sine eşitse yani sepette aynı üründen var mı
    CartItems.splice(CartItems.indexOf(item),1);//CartItem içindeki itemi bul ve sil demek.index numarasını bul ve ordan itibaren 1 tane sil demek
  }

  list():CartItem[]{//Dönüş olarak database değil CartItems ı kullanıyoruz bunu belirtiyoruz
    return CartItems;
  }
}
