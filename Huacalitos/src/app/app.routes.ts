import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from 'app/components/home/products/products.component';
import { OrderComponent } from 'app/components/home/order/order.component';
import { ClientsComponent } from 'app/components/home/clients/clients.component';
import { AuthGuard } from 'app/components/guards/auth.guard';

export const homeRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'inventory', component: ProductsComponent },
            { path: 'clients', component: ClientsComponent },
            { path: 'orders', component: OrderComponent }
        ]
    }
];
