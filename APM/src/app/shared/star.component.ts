import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    starWidth: number;
    @Input() rating;

    ngOnChanges(changes): void {
        this.starWidth = this.rating * 86 / 5;
    }
}
