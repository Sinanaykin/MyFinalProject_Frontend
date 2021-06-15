export interface Product{ //export=public gibi düşünebiliriz.İnterfacelerin önüne  I koymayız javascriptde(burda typescript tabi)
 productId:number; //sayısal seyler int değil number veririz veri tipini.Api deki product ın özelliklerini ve veri tipini belirttik
 categoryId:number;
 productName:string;
 unitsInStock:number;
 unitPrice:number;
}
