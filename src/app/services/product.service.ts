import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //api ye istek de bulunmak için bu importu eklemeliyiz.dataları almak için
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({ //injectable görünce bu bir servis demek
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44317/api/'; //postmanden aldın bu url imizi

  constructor(private httpClient: HttpClient ) { }//HttpClient ı enjeckte etmeliyiz.httpClient istiyorum türüde HttpClient olsun diyo burda.Yukarıda importu ekledik


  getProducts():Observable<ListResponseModel<Product>> {//sen subscribe olunabilir bir ProductResponseModel DÖNÜCEKSİN DİYORUZ
    let newPath=this.apiUrl + "products/getall" //newPath adında bir şey tanımladık yol verdilk bunu yukarıdaki api Url nin devamında kullanıcaz şartlar sağlanırsa
   return this.httpClient.get<ListResponseModel<Product>>(newPath);//httpClient.Get talebinde bulunduk yukarıda tanımladıgımız apiUrl i verdik buraya. Ordan gelen datayı da <ProductResponseModel>  e map ediceksin
 //newPath i buraya vermeliyiz
  }


  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {//Eğer categoryId gelirse getProductsmetodunu değilde getProductsByCategory metodunu çalıştır demek için bu metoduda ekledik
    let newPath=this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);//newPath adında bir şey tanımladık burayada yol verdilk bunu yukarıdaki api Url nin devamında kullanıcaz şartlar sağlanırsa,newPath i buraya vermeliyiz
   }
}
