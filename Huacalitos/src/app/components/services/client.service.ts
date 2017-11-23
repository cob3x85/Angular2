import { Injectable } from '@angular/core';
import { Client } from '../classes/client';
import { AuthService } from 'app/components/services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClientService {
  auth: AuthService;
  clients: FirebaseListObservable<Client[]>;

  constructor(public afAuth: AuthService, public dbFirebase: AngularFireDatabase) {
    this.auth = afAuth;
   }

   getClients() {
     this.clients = this.dbFirebase.list('/customers');
     this.clients.subscribe(snapshot => {
      console.log(snapshot);
  });
     return this.clients;
   }
}
