import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Acme Huacalitos';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  // Funtion run when the component is initialized
  // Constructor is the place to add Dependency Injection
  constructor(private _productService: ProductService) {
    this.listFilter = '';
  }

  // Lifecycle Hook
  ngOnInit(): void {
    console.log('In OnInit, Load products');

    // Subscribe has 3 callbacks, (valueFn , onErrorfn, onCompleteFn )
    this._productService.getProducts(true)
      .subscribe(product => {
        this.products = product;
        this.filteredProducts = this.products;
      },
        error => this.errorMessage = <any>error);

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
