import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscriber } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = []; //productsa veri tipini verirken Product yaz çıkan yerden seç ki yukarı exportunuda getirsin.
  dataLoaded=false;//veri yüklendi burda false
  filterText="";//product .html de arama  ile alakalı elimizde data var bunu component de tanımlamalıdıks

  //productResponseModel:ProductResponseModel{};

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService) {} //ProductComponent ProductService i kullanabilir diyoruz burda.ActivatedRoute mevcut ,aktif route demek buda.Toastr(ngx-toastr) ı kullanmak için buraya eklemeliyiz adamlar bunu zaten servis gibi yapmış ondan böyle ekledik

  ngOnInit(): void { //ngOnİnit bu component açıldığında çalışacak ilk metodtur
    // bu aslında c# daki public void NgOnIt() metodu gibi burda syntax farklı ondan böyle yazıyoruz
    this.activatedRoute.params.subscribe(params=>{//activatedRoute a gidip categoryId verilmişmi ona bakıcaz
      if (params["categoryId"]) {//eğer categoryId si varsa
        this.getProductsByCategory(params["categoryId"]) //getProductsByCategory bu metodu çalıştır içinede params ın categoryId sini yolla
      }else{
        this.getProducts()//eğer categoryId yoksa getProducts i çalıştır diyoruz burdada
      }
    })
  }

  getProducts() {
   this.productService.getProducts().subscribe(response=>{ //productService deki getProducts  a  response için productsa respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
     this.products=response.data
     this.dataLoaded=true;//veri yüklenince true yapıyoruz
   });

  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{ //productService deki getProducts  a  response için productsa respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
      this.products=response.data
      this.dataLoaded=true;//veri yüklenince true yapıyoruz
    });

   }

   addToCart(product:Product){//addToCart fonksiyonuna parametre olarak productı verdik
    if (product.productId===1) {
      this.toastrService.error("Hata","Bu ürün sepete eklenemez")//id si bir olan eklenmesin mesela
    }
    else{
    this.toastrService.success("Sepete eklendi",product.productName)
    }

   }
}
