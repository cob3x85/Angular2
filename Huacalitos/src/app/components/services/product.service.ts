import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MockProducts } from 'app/components/mock-data/mock-products';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {
    auth: AuthService;
    products: FirebaseListObservable<Product[]>;
    productsDb: FirebaseObjectObservable<any[]>;
    filteredProducts: FirebaseListObservable<Product[]>;


    constructor(public afAuth: AuthService, public dbFirebase: AngularFireDatabase) {
        this.auth = afAuth;
    }

    getProducts(): FirebaseListObservable<Product[]> {
        this.products = this.dbFirebase.list('/products');
        this.products.subscribe(snapshot => {
            console.log(snapshot);
        });

        this.filteredProducts = this.dbFirebase.list('/product', {
            query: {
                limitToFirst: 1
            }
        });
        return this.products;
    }

    getMockProducts() {
        return MockProducts;
    }

    // saveProduct(){
    //     this.dbFirebase.app.database().ref()
    // }

}
