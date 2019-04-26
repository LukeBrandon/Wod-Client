import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  isOwner() {
    if (this.loginService.getStatus() === 'owner') {
      return true;
    }
    return false;
  }

}
