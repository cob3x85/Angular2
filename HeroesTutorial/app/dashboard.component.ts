import { Component, OnInit } from '@angular/core';

import { Hero } from './Imports/Classes';
import { HeroService } from './Services/hero.service';


@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'Content/Dashboard.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.heroService.getHeroesSlowly()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

} 