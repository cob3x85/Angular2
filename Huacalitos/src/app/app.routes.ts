import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from 'app/components/home/products/products.component';
import { OrderComponent } from 'app/components/home/order/order.component';
import { UsersComponent } from 'app/components/home/users/users.component';

export const homeRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'inventory', component: ProductsComponent },
            { path: 'orders', component: OrderComponent },
            { path: 'users', component: UsersComponent}
        ]
    }
];
