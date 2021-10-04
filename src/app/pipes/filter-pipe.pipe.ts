import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {//value değeri yani değiştirmek istediğimiz değer PRODUCT dizisi,gönderilen şey ise filterText türü string,Dönüş değeri ise yine Product dizisi olucak
    filterText=filterText?filterText.toLocaleLowerCase():"" //Arama yaparken küçük büyük karakter sıkıntı olmasın diye genelde küçük harfe ceviririz
    //Eğer filterText alanı var ise(arama yerine yazı yazmışsak) küçük yap yoksa bos dön dedik
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value; //FilterText varsa value yani Product değerini filtrele öncelikle productName i küçük harfe çevir
   //eğer filterText (yazdıgımız filtre ismi ürünler içinde varsa) varsa onu döndür.Yoksa direk value oldugu gibi döndür
  }

}
