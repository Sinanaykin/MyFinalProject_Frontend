import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //api ye istek de bulunmak için bu importu eklemeliyiz.dataları almak için
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({ //injectable görünce bu bir servis demek
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44317/api/products/getall'; //postmanden aldın bu url imizi

  constructor(private httpClient: HttpClient ) { }//HttpClient ı enjeckte etmeliyiz.httpClient istiyorum türüde HttpClient olsun diyo burda.Yukarıda importu ekledik


  getProducts():Observable<ProductResponseModel> {//sen subscribe olunabilir bir ProductResponseModel DÖNÜCEKSİN DİYORUZ
   return this.httpClient.get<ProductResponseModel>(this.apiUrl)//httpClient.Get talebinde bulunduk yukarıda tanımladıgımız apiUrl i verdik buraya. Ordan gelen datayı da <ProductResponseModel>  e map ediceksin


  }
}
