import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; //Bunları eklemeliyiz Reactive form kullanmak için
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup; //FormGroup türünde bir productAdform tanımladık

  constructor(private formBuilder:FormBuilder,private productService:ProductService,private toastrService:ToastrService ) { }//FormBuilder bir service dir o yüzden buraya tanımlamalıyız ve ProductService 'i kullandığımız için onu da eklicez

  ngOnInit(): void {
    this.createProductAddForm(); //Sayfa açılınca bu fonksiyon çalışsın demek
  }

  createProductAddForm(){ //Form oluşturmak için bu metodu oluşturduk
     this.productAddForm=this.formBuilder.group({ //form içindeki grupta olmasını istediğimiz şeyleri yazıyoruz .Yani product eklerken ne değerler giricez
       productName:["",Validators.required],//productName olsun defaulta bir şey girilmezse ne gelsini yazıyoruz ilk boşluğa burda onu boş bıraktık boş gelsin ve Validator diyip zorunluyu seçtik
       unitPrice:["",Validators.required],
       unitsInStock:["",Validators.required], //BURDAKİ İSİMLENDİRME mODEL İÇİNDEKİ PRODUCT İLE AYNI OLMALIDIR
       categoryId:["",Validators.required]
     })
  }

  add(){
    if (this.productAddForm.valid) {//Eğer validation lar uyuyorsa
      let productModel=Object.assign({},this.productAddForm.value) //productModel için bir obje oluşturuyor oda boş biz bu alanları(productAddForm daki alanları) alıp boş yere eklicez
     this.productService.add(productModel).subscribe(response=>{ //productService e productModel'i gönderiyoruz ve asekronluğa uysun diye mesajı subscribe içinde vericez
      console.log(response)
      this.toastrService.success(response.message,"Başarılı")
     })

    }else {
     this.toastrService.error("Formunuz eksik","Dikkat")
    }


  }

}
