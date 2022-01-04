import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'; //Bunları eklemeliyiz Reactive form kullanmak için

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup; //FormGroup türünde bir productAdform tanımladık

  constructor(private formBuilder:FormBuilder ) { }//FormBuilder bir service dir o yüzden buraya tanımlamalıyız

  ngOnInit(): void {
    this.createProductAddForm(); //Sayfa açılınca bu fonksiyon çalışsın demek
  }

  createProductAddForm(){ //Form oluşturmak için bu metodu oluşturduk
     this.productAddForm=this.formBuilder.group({ //form içindeki grupta olmasını istediğimiz şeyleri yazıyoruz .Yani product eklerken ne değerler giricez
       productName:["",Validators.required],//productName olsun defaulta bir şey girilmezse ne gelsini yazıyoruz ilk boşluğa burda onu boş bıraktık boş gelsin ve Validator diyip zorunluyu seçtik
       uniPrice:["",Validators.required],
       UnitInStock:["",Validators.required], //BURDAKİ İSİMLENDİRME mODEL İÇİNDEKİ PRODUCT İLE AYNI OLMALIDIR
       categoryId:["",Validators.required]
     })
  }

}
