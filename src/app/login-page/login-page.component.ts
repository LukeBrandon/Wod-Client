import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userEmail = new FormControl();
  userPassword = new FormControl();

  constructor(
    private apiService: APIService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(): void {
    const credentials = {
      email: this.userEmail.value,
      password: this.userPassword.value,
    };
    this.apiService.login(credentials).subscribe(result => {
      console.log(result);
      if (result !== null) {
        this.router.navigate(['homeScreen']);
      } else {
        this.showLoginError('invalid username or password');
      }
    });
  }

  showLoginError(error: string): void {
    console.log('showing login error');
  }

}
