import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {//html tarafında vatAdded dediğimizde buraya gelir ver transform metodu çalışır.

  transform(value: number, rate:number): number { //Value pipe ımızın değiştirmeye çalıştıgı değer(unitprice) bu yüzden number yazıyoruz ikincisi ise html de gönderilen oran(eğer varsa yazılır) o da number belirtiyoruz ,dönüş tipide number.
    return value+(value*rate/100);//kdv li fiyat hesapladık burda
  }

}
