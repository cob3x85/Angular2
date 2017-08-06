import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AboutHomeComponent } from 'app/components/about-home/about-home.component';
import { AboutItemComponent } from 'app/components/about-item/about-item.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about',
        component: AboutComponent,
        children: [
            { path: '', component: AboutHomeComponent },
            { path: 'item/:id', component: AboutItemComponent }
        ]
    }
];
