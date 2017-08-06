import { Component, OnInit } from '@angular/core';
import { ROUTES } from './../../components/sidebar/sidebar-routes.config';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthService } from 'app/components/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    private isLoggedIn: Boolean;
    private user_displayName: String;
    private user_email: String;
    constructor(location: Location, public authService: AuthService, private router: Router) {
        this.location = location;
        this.user_email = this.authService.user_email;
        this.user_displayName = this.authService.user_displayName;
    }
    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return '';
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}
