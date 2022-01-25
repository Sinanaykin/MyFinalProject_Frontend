import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44317/api/auth'; //postmanden aldın bu url imizi

  constructor(private httpClient:HttpClient) { }//HttpClient ı enjeckte etmeliyiz.httpClient istiyorum türüde HttpClient olsun diyo burda.Yukarıda importu ekledik

  login(loginModel:LoginModel){//Bizden bir tane LoginModel türünde loginModel istiyor
    return this.httpClient.post(this.apiUrl+"login",loginModel)//loginModeli göndericez burda belirtilen adrese(apiye)
  }
  isAuthenticated(){//kişi giriş yapmış mı yapmamış mı onun hakkında bilgi veren metot
    if (localStorage.getItem("token")) {//localStorage de token var ise demek bu.localStorage=tokenı tuttuğumuz yer bizi hatırlaması için
      return true;
    }else{
      return false;
    }
  }

}
