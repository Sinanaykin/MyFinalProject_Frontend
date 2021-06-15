import { Product } from "./product";//product.ts nin ve responseModel.ts nin importunu veriyoruz onları kullanıyor cünkü
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{ //Burda datayı yazıyoruz message ve successi extends ResponseModel(bunu yazarken çıkana bas yukarı importu gelsin) diyip ResponseModel(responseModel.ts) den alıyoruz direk.Kalıtım alma gibi bir şey yani

  data:Product[]  //çıkan yerden sec Product ı yukarı importu gelsin direk .Data mız Product döner ama dizi olarak  gelir  api den postmande gördük zaten ondan böyle veriyoruz

}
