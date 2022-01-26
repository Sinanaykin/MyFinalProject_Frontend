import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService,private toastrService:ToastrService,private router:Router){//AuthService=Giriş yapmışmı onu kontrol için.ToastrService mesaj için.Router giriş yapmayanı giriş sayfasına yönlendirmek için

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.authService.isAuthenticated()) {//eğer tokenı var ise giriş yapmışsa
        return true;
      }else{//giriş yapmamışsa
        this.router.navigate(["login"])//giriş ekranına yönlendir
        this.toastrService.info("Sisteme Giriş Yapmalısınız")
        return false;
      }
  }

}
