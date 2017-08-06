import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css']
})
export class AboutItemComponent implements OnInit, OnDestroy {

  id: number;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe((params: any) => {
      this.id = parseInt(params['id'], 10);
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
