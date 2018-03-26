import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]

})
export class AppComponent {
  pageTitle = 'Angular: Getting Started';

  getTitle(): string {
    return this.pageTitle;
  }
}
