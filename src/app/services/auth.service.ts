import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44317/api/auth/'; //postmanden aldın bu url imizi

  constructor(private httpClient:HttpClient) { }//HttpClient ı enjeckte etmeliyiz.httpClient istiyorum türüde HttpClient olsun diyo burda.Yukarıda importu ekledik

  login(loginModel:LoginModel){//Observable desek de olur demesekde.Bizden bir tane LoginModel türünde loginModel istiyor.SingleResponseModel<TokenModel>=Geriye bir TokenModel dönücek.(Yani Token,expiration ,message,success hepsi döner dolaylı yoldan)
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)//loginModeli göndericez burda belirtilen adrese(apiye)
  }
  isAuthenticated(){//kişi giriş yapmış mı yapmamış mı onun hakkında bilgi veren metot
    if (localStorage.getItem("token")) {//localStorage de token var ise demek bu.localStorage=tokenı tuttuğumuz yer bizi hatırlaması için
      return true;
    }else{
      return false;
    }
  }

}
