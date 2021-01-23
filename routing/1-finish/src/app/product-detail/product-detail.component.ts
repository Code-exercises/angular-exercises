import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Product, ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product

  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.product = this.productService.getProductById(Number.parseInt(params['id']))
    });
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

}
