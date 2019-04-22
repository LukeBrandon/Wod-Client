import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private apiService: APIService,
  ) { }

  test() {
    this.apiService.getTest().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
