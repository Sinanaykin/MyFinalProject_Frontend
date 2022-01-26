import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';//apiden veri almak için bunu ekle

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"//toastr ın daha düzgün çalışması için bu kütüphaneyide ekledik ,altta import  içinede belirt

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';//arama alanı için ngModule kullanabilmek için bunu ekledik
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, //kullanacağımız componentleri buraya eklemeliyiz
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//yukarıda importu ekledikten sonra bunuda ekle
    FormsModule,//arama alanı için ngModule kullanabilmek için bunu ekledik
    BrowserAnimationsModule,//yukarı importunu eklediğimizi buraya da ekliyoruz
    ReactiveFormsModule,
    ToastrModule.forRoot({ //forRoot diyerek bunu kullanılabilir hale getir diyoruz
      positionClass:"toast-bottom-right"  //ekranın neresinde cıksın
    })

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
    //provide:HTTP_INTERCEPTORS=Bütün servisler için kullanılsın dedik.
    //useClass:AuthInterceptor=HHTTP_INTERCEPTORS olarak çalışacak şey AuthInterceptor bunu belirtiyoruz
    //multi:true=çoklu kullanıma izin veriyoruz
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
