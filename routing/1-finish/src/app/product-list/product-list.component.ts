import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private sorting: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.sorting = params.sorting
    })
  }

  getProducts(): Product[] {
    return this.productService.getAllProducts().sort((first, second) => {
      if (this.sorting === 'price') {
        return first.price - second.price;
      } else {
        return first.title.localeCompare(second.title);
      }
    })
  }

}
