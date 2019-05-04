import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-class-board-page',
  templateUrl: './class-board-page.component.html',
  styleUrls: ['./class-board-page.component.scss']
})

export class ClassBoardPageComponent implements OnInit {
  allUsers: any;
  loggedInUsers: any[] = [];
  selectedUser: any;

  constructor(
    private apiService: APIService,
  ) { }

  ngOnInit() {
    this.apiService.getAllUsers().subscribe(result => {
      this.allUsers = result;
    });
  }

  signIn() {
    if (!this.loggedInUsers.includes(this.selectedUser) && this.apiService.canSignIn(this.selectedUser)) {
      this.loggedInUsers.push(this.selectedUser);
      this.selectedUser = null;
    }

  }

}
