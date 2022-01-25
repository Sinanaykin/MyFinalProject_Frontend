import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";//Bunları eklemeliyiz Reactive form kullanmak için

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup; //FormGroup türünde bir loginForm tanımladık.Bunu html de vermemiz lazım

  constructor(private formBuilder:FormBuilder) { }//FormBuilder bir service dir o yüzden buraya tanımlamalıyız

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
    }
  }

}
