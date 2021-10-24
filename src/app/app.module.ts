import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//apiden veri almak için bunu ekle

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"//toastr ın daha düzgün çalışması için bu kütüphaneyide ekledik ,altta import  içinede belirt

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';//arama alanı için ngModule kullanabilmek için bunu ekledik

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';//ngx-toastr için importu ekledik

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, //kullanacağımız componentleri buraya eklemeliyiz
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//yukarıda importu ekledikten sonra bunuda ekle
    FormsModule,//arama alanı için ngModule kullanabilmek için bunu ekledik
    BrowserAnimationsModule,//yukarı importunu eklediğimizi buraya da ekliyoruz
    ToastrModule.forRoot({ //forRoot diyerek bunu kullanılabilir hale getir diyoruz
      positionClass:"toast-bottom-right"  //ekranın neresinde cıksın
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
