import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';

export interface IUserCredentials {
  email: string;
  password?: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})

export class APIService {
  url = 'http://localhost:15100';

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) { }

  getTest() {
    const url = `${this.url}/ping`;
    return this.http.get(url, { responseType: 'text' });
  }

  getWod(year, month, day) {
    const url = `${this.url}/getWod/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getResults(year, month, day) {
    const url = `${this.url}/getResults/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }

  login(credentials) {
    const url = `${this.url}/users/login`;
    this.http.post<IUserCredentials>(url, credentials).subscribe(result => {
      if (result !== null) {
        this.loginService.setStatus(result.status);
        this.loginService.setEmail(result.email);
        return true;
      }
      return false;
    });
  }
}
