import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";//Bunları eklemeliyiz Reactive form kullanmak için
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup; //FormGroup türünde bir loginForm tanımladık.Bunu html de vermemiz lazım

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }//FormBuilder bir service dir o yüzden buraya tanımlamalıyız

  ngOnInit(): void {
    this.createLoginForm();//sayfa açılınca bu gözüksün
  }
  createLoginForm(){//Form oluşturmak için bu metodu oluşturduk

    this.loginForm=this.formBuilder.group({//form içindeki grupta olmasını istediğimiz şeyleri yazıyoruz .Yani login eklerken ne değerler giricez.Html de bunu [FormGroup] a eşitleyip bağlantı kurcaz
       email:["",Validators.required],//email olsun defaulta bir şey girilmezse ne gelsini yazıyoruz ilk boşluğa burda onu boş bıraktık boş gelsin ve Validator diyip zorunluyu seçtik
       password:["",Validators.required]
    })
  }
  login(){
    if (this.loginForm.valid) {//Eğer validation lar uyuyorsa
      console.log(this.loginForm.value);
      let loginModel=Object.assign({},this.loginForm.value)//loginModel için bir obje oluşturuyoruz oda boş biz bu alanları(loginForm daki alanları) alıp boş yere eklicez
      this.authService.login(loginModel).subscribe(response=>{//authService deki login metoduna loginModel'i gönderiyoruz ve asekronluğa uysun diye mesajı subscribe içinde vericez.Başarılı ise bu çalışır
        this.toastrService.info(response.message)//data içinde gelen mesajı dön diyoruz
      localStorage.setItem("token",response.data.token)//tokenı tuatacağımız yer burası.response içindeki data daki tokenı burda tut
      },responseError=>{
        this.toastrService.error(responseError.error)//Eğer validationlar uymuyorsa hata mesajı verir

      })
    }
  }

}
