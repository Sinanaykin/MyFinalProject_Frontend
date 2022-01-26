import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {//Bütün http isteklerimizi intercep edecek yer

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {//request=ürün bilgilerini girmek ve post etmek için olan kısım yani istek,next=isteğe bir şey koyacak kısım
    let token=localStorage.getItem("token");//token ımızı alıcaz
    let newRequest:HttpRequest<any>;//Bizim yaptığımız istek HttpRequest<any> bunu newRequest de tutucaz
    newRequest=request.clone({//kullanıcın yapmaya çalıştığı isteği klonla diyoruz ve bir şeyler eklemek istiyosan aşağıda yaz örneğin headers(pOSTMANDAKİ ) eklicez
      headers:request.headers.set("Authorization","Bearer " + token)//Gönderdiğimiz sorgunun içine Authorization,Bearer ve tokenı ekliyor
    })
    return next.handle(newRequest);//Burda newRequesti handle etmeliyiz
  }
}
