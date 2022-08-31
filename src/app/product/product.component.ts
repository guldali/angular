import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertService } from '../services/alert.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private alertService: AlertService) { } //injecşın yap.
  filterText = "";
  title = "Ürün Listesi";
  products: Product[] = [
    { id: 1, name: "laptop", price: 34, imageUrl: "https://media.istockphoto.com/photos/the-time-to-get-growing-is-now-picture-id1292991882?b=1&k=20&m=1292991882&s=170667a&w=0&h=5m-6ALajoDouoyaFWwbXrGUyRzeqS97_5Gmaww2YuJc=" },
    { id: 1, name: "Mause", price: 34, imageUrl: "https://media.istockphoto.com/photos/the-time-to-get-growing-is-now-picture-id1292991882?b=1&k=20&m=1292991882&s=170667a&w=0&h=5m-6ALajoDouoyaFWwbXrGUyRzeqS97_5Gmaww2YuJc=" },
    { id: 1, name: "PC", price: 34, imageUrl: "https://media.istockphoto.com/photos/the-time-to-get-growing-is-now-picture-id1292991882?b=1&k=20&m=1292991882&s=170667a&w=0&h=5m-6ALajoDouoyaFWwbXrGUyRzeqS97_5Gmaww2YuJc=" },

  ]

  ngOnInit(): void {
  }

  addToCart(gul: any) {
    //alert("Sepete Eklendi : " + gul.name)
    // alertify.success('Ok');
    this.alertService.success(gul.name + " added");

  }

}