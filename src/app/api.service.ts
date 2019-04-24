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

  getWod(year, month, day) {
    const url = `${this.url}/getWod/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }

  getResults(year, month, day) {
    const url = `${this.url}/getResults/${year}/${month}/${day}`;
    return this.http.get(url, { responseType: 'json' });
  }
}
