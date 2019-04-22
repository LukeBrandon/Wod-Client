import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { IWod } from '../../models/wodModels';

@Component({
  selector: 'app-wod-page',
  templateUrl: './wod-page.component.html',
  styleUrls: ['./wod-page.component.scss']
})
export class WodPageComponent implements OnInit {
  wod: any;
  showWod: boolean;

  constructor(
    private apiService: APIService,
  ) { }

  ngOnInit() {
  }

  getWod() {
    this.apiService.getWod().subscribe(result => {
      this.wod = result;
    });
    this.showWod = true;
  }


}
