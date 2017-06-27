import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithEmail(this.username, this.password).then((data) => {
      this.router.navigate(['']);
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    });
  }

}
