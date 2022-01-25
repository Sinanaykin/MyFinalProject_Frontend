import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [

  {path:"",pathMatch:"full",component:ProductComponent},//Hiç birşey yazılmazsa anasayfam ProductComponent olsun diyoruz burda
  {path:"products",component:ProductComponent},//localhostun sonuna products denirse yine ProductComponent olsun diyoruz burda
  {path:"products/category/:categoryId",component:ProductComponent},//aslında bu products/caregory/1 gibi bir yol bunu tanımlıyoruz burda
  {path:"products/add",component:ProductAddComponent},//products/add görünce ProductAddComponent i çalıştır demek
  {path:"login",component:LoginComponent}//login diyince adrese LoginComponente yönlendirsin

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
