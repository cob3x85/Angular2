import { Injectable } from '@angular/core';
import { IProduct } from '../products/products';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
// Import rxjs/add/operator classes for the http call

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:52224/api/product/';

    private _mockProductUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {

    }

    getProducts(includeDeleted: boolean): Observable<IProduct[]> {

        return this._http.post(this._productUrl + 'products', includeDeleted,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            })
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err);
        // We can change this for Notifications
        return Observable.throw(err.error);
    }

    getProductsMock(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._mockProductUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
}
