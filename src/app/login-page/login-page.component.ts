import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userEmail = new FormControl();
  userPassword = new FormControl();
  loginError: boolean;

  // make this a seperate component
  errorTitle: string;
  errorBody: string;

  constructor(
    private apiService: APIService,
    private LoginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(): void {
    const credentials = {
      email: this.userEmail.value,
      password: this.userPassword.value,
    };
    let result = this.apiService.login(credentials);
    console.log(result);
    if (result !== null) {
      this.loginError = false;
      this.router.navigate(['homeScreen']);
    } else {
      this.loginError = true;
      this.setLoginError('Login Error', 'invalid username or password');
    }
  }

  setLoginError(errorTitle: string, errorBody: string): void {
    this.errorTitle = errorTitle;
    this.errorBody = errorBody;
  }

}
