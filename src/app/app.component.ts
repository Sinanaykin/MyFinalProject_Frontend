//Data yı yönettiğimiz yerdir burası

import { Component } from '@angular/core';

@Component({//bunu asağıdaki classın attribute ü gibi düşünebiliriz.aşağıdaki classın component oldugunu söyler burda..
  selector: 'app-root',//app aldında index.html içinde app-root var dı burda onu tanımasını sağlıyoruz.Bir componenti bir sayfada göstermek için ,  html tagi gibi kullanabileceğiniz app-root gibi kullanabilirsin beni demek bu.
  templateUrl: './app.component.html',//kimin componenti oldugunu söyler burda../app.component.html in datasını yönetecek componentsin diyo burda alttaki component için
  styleUrls: ['./app.component.css']//asağıdaki componentin kısacası /app.component.html in css lerini koydugumuz yer
})
export class AppComponent {
  title: string = "northwind";//:string diyip veri tipini verebiliriz typescript de.Ayrıca northwind tek tırnak içinde de çalısır çift tırnak içinde de.
  user: string = "Sinan Aykın";//sonuna ; koysakda olur koymasakda

}
