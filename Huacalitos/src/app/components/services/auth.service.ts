import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { credName, credKey } from '../../../environments/environment';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  private user_displayName: String;
  userInfo: Observable<firebase.UserInfo>;
  user_email: String;
  isLoggedIn: boolean;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged(
      (auth) => {
        if (auth == null) {
          this.user_displayName = '';
          this.user_email = '';
        } else {
          this.isLoggedIn = true;
          // this.user_displayName = auth.displayName;
          this.user_email = auth.email;
        }
      });
  }

  // use parameters coming from page.
  loginWithEmail(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(userName, password).then((success) => {
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
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
