import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-white-board-page',
  templateUrl: './white-board-page.component.html',
  styleUrls: ['./white-board-page.component.scss']
})
export class WhiteBoardPageComponent implements OnInit {
  userScores: any = [];
  userDate = new FormControl();
  showScores: boolean;

  constructor(
    private apiService: APIService,
  ) {
    this.showScores = false;
  }

  ngOnInit() {
  }

  getResults() {
    const dateList = this.userDate.value.split('-');
    const year = dateList[0];
    const month = dateList[1];
    const day = dateList[2];

    this.apiService.getResults(year, month, day).subscribe(result => {
      console.log(result);
      this.userScores = result;
    });
    this.showScores = true;
  }


}
