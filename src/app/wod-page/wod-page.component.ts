import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wod-page',
  templateUrl: './wod-page.component.html',
  styleUrls: ['./wod-page.component.scss']
})
export class WodPageComponent implements OnInit {
  wod: any;
  showWod: boolean;
  date: Date;
  userDate = new FormControl();

  constructor(
    private apiService: APIService,
  ) {
  }

  ngOnInit() {

  }

  getWod() {
    const dateList = this.userDate.value.split('-');
    const year = dateList[0];
    const month = dateList[1];
    const day = dateList[2];

    // date input in YYYY-MM-DD
    this.apiService.getWod(year, month, day).subscribe(result => {
      this.wod = result;
    });
    this.showWod = true;

  }


}
