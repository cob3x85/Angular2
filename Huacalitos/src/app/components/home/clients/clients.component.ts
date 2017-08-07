import { Component, OnInit } from '@angular/core';
import { Client } from 'app/components/classes/client';
import { ClientsMock } from 'app/components/mock-data/clients-mock';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
    this.clients = ClientsMock;
  }

}
