import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url = 'http://localhost:15100';

  constructor(
    private http: HttpClient,
  ) { }

  getTest() {
    const url = `${this.url}/ping`;
    return this.http.get(url, { responseType: 'text' });
  }

  getWod() {
    const url = `${this.url}/getWod`;
    return this.http.get(url, { responseType: 'json' });
  }
}
