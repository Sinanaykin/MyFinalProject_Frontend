import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = []; //productsa veri tipini verirken Product yaz çıkan yerden secki yukarı exportunuda getirsin.
  dataLoaded=false;//veri yüklendi burda false

  //productResponseModel:ProductResponseModel{};

  constructor(private productService:ProductService) {} //ProductComponent ProductService i kullanabilir diyoruz burda

  ngOnInit(): void {
    // bu aslında c# daki public void NgOnIt() metodu gibi burda syntax farklı ondan böyle yazıyoruz
    this.getProducts(); //aşağıdakini (fonksiyonu) çağırıyoruz burda
  }

  getProducts() {
   this.productService.getProducts().subscribe(response=>{ //productService deki getProducts  a  response için productsa respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
     this.products=response.data
     this.dataLoaded=true;//veri yüklenince true yapıyoruz
   });
   console.log();
  }
}
