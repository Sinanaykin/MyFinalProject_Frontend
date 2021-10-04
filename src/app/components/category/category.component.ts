import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];//modeli belirttik category diye ve  dizi dönücek dedik
  currentCategory:Category; // secilen category. aynı zamandale çalışıyorsak ona tutmak istiyoruz.Tek bir kategori tutmak için



  constructor(private categoryService:CategoryService) {}

  ngOnInit(): void {//component açılınca ilk çalısıcak metod ngOnİnit dir
    // bu aslında c# daki public void NgOnIt() metodu gibi burda syntax farklı ondan böyle yazıyoruz
    this.getCategories(); //aşağıdakini (fonksiyonu) çağırıyoruz burda
  }

  getCategories() {
   this.categoryService.getCategories().subscribe(response=>{ //categoryService deki getProducts  a  response için categoriese respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
     this.categories=response.data

   });

  }

   setCurrentCategory(category:Category){ //customer gönderiyoruz ve Customer türünde olsun dedik.category.component.ts de ki metodu burda yazıyoruz, set ediyoruz
    this.currentCategory=category;

  }
  getCurrentCategoryClass(category:Category){
    if (category==this.currentCategory)//benim categoryim seçilen categorye eşitse onu active yapıcaz
    {
      return "list-group-item active" //eşitse active yaptık
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }
  getAllCategoryClass(){
    if (!this.currentCategory)//eğer benim categoryim yoksa
    {
      return "list-group-item active" //bu active olsun
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }

}
