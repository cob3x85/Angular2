import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';

import { ProductService } from './components/services/product.service';
import { AuthService } from './components/services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

firebase.initializeApp(environment.firebase, );

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    OrderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SidebarModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, 'huacalitos-3b554'), // imports firebase/app needed for everything
    AngularFireAuthModule, // imports firebase/database, only needed for database features
    AngularFireDatabaseModule // imports firebase/auth, only needed for auth features
  ],
  providers: [AuthService, ProductService, RouterModule], // Add every service to be used as a module
  bootstrap: [AppComponent]
})
export class AppModule { }
