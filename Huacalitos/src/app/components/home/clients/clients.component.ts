import { Component, OnInit } from '@angular/core';
import { Client } from 'app/components/classes/client';
import { ClientsMock } from 'app/components/mock-data/clients-mock';
import { ClientService } from '../../services/client.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  clientSvc: ClientService;
  clientsDb: FirebaseListObservable<Client[]>;

  constructor(private clientService: ClientService) {
    this.clientSvc = clientService;
  }

  ngOnInit() {
    this.clientsDb = this.clientService.getClients();
  }

}
