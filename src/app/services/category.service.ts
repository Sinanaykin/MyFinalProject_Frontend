import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //api ye istek de bulunmak için bu importu eklemeliyiz.dataları almak için
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({ //injectable görünce bu bir servis demek
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44317/api/categories/getall'; //postmanden aldın bu url imizi

  constructor(private httpClient: HttpClient ) { }//HttpClient ı enjeckte etmeliyiz.httpClient istiyorum türüde HttpClient olsun diyo burda.Yukarıda importu ekledik


  getCategories():Observable<ListResponseModel<Category>> {//sen subscribe olunabilir bir ProductResponseModel DÖNÜCEKSİN DİYORUZ
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)//httpClient.Get talebinde bulunduk yukarıda tanımladıgımız apiUrl i verdik buraya. Ordan gelen datayı da <ProductResponseModel>  e map ediceksin


  }
}
