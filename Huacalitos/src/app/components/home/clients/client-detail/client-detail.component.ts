import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'app/components/classes/client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  @Input() client: Client;


  constructor() { }

  ngOnInit() {
  }

}
