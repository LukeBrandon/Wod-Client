import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  setEmail(email: string): void {
    localStorage.setItem('email', email);
  }

  setStatus(status: string): void {
    localStorage.setItem('status', status);
  }

  getEmail() {
    return localStorage.getItem('email');
  }

  getStatus() {
    return localStorage.getItem('status');
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('status');
  }

}
