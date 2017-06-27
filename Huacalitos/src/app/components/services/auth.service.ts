import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { credName, credKey } from '../../../environments/environment';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  userInfo: Observable<firebase.UserInfo>;

  constructor(public afAuth: AngularFireAuth) {

  }

  // use parameters coming from page.
  loginWithEmail(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(credName, credKey).then((success) => {
        console.log(success);
        resolve(true);
      }, (error) => {
        console.error(error);
        resolve(false);
      });
    });
  }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup({
      providerId: firebase.auth.GoogleAuthProvider.PROVIDER_ID
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    console.log('logged out');
  }
}
