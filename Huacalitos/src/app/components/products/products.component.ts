import { Component, OnInit } from '@angular/core';
import { Product } from './../classes/product';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productSvc: ProductService;
  productList: Product[];
  productsDb: FirebaseListObservable<Product[]>;
  authSvc: AuthService;
  user: Observable<firebase.User>;

  constructor(authSvc: AuthService, productSvc: ProductService, public dbFirebase: AngularFireDatabase) {
    this.productSvc = productSvc;
    this.authSvc = authSvc;
  }

  ngOnInit() {
    this.productList = this.productSvc.getMockProducts();
  }

  // login() {
  //   this.authSvc.loginWithEmail().then((isLoggedIn) => {
  //     if (isLoggedIn) {
  //       this.user = this.authSvc.afAuth.authState;
  //       this.productsDb = this.productSvc.getProducts();
  //     };
  //   });
  // }

  // logout() {
  //   this.authSvc.logout();
  //   this.user = this.authSvc.afAuth.authState;
  // }

}
