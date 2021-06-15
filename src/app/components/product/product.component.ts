import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {


  products:Product[] = [];  //productsa veri tipini verirken Product yaz çıkan yerden secki yukarı exportunuda getirsin


  constructor() {}

  ngOnInit(): void {}
}
