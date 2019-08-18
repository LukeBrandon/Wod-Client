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

  getWod(year, month, day) {
    console.log(year, month, day);
    const url = `${this.url}/getWod/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getResults(year, month, day) {
    const url = `${this.url}/getResults/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getAllUsers() {
    const url = `${this.url}/getAllUsers`;
    return this.http.get(url, { responseType: 'json' });
  }

  async canSignIn(selectedUser) {
    let userData;
    let signIns = 0;
    const url = `${this.url}/getAllUsers`;
    await this.http.get(url).subscribe(result => {
      userData = result;
      console.log(userData);
      for (const user in userData) {
        if (userData[user].name === selectedUser.name) {
          signIns = userData[user].signInsThisWeek;
          console.log(`signins set to ${signIns}`);
        }
      }
    });


    console.log('signins is ' + signIns);

    if (signIns <= 4) {
      console.log('yes: signins = ' + signIns);
      return true;
    } else {
      console.log('nope: signins = ' + signIns);
      return false;
    }
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
