import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];//cartItems değişkeni tanımladık içi boş array olarak

  constructor(private cartService:CartService,private toastrService:ToastrService) { }//cart.service i tanıtıyoruz buraya da.

  ngOnInit(): void {
    this.getCart();//ilk başta otomatik bu gelsin
  }

  getCart()
{
  this.cartItems=this.cartService.list();//cartItems  için  cartService deki list metodunu çalıştırdık o metotda zaten sepetdeki ürünleri listeliyodu.
}

removeFromCart(product:Product){//product göndericez
  this.cartService.removeFromCart(product);//cartService deki removeFromCart metoda bu productı yolla.Zaten orda silme işlemi yapıyoruz biz
  this.toastrService.error("Silindi",product.productName+"sepetten silindi")//toastr ile mesaj ekledik
}
}
