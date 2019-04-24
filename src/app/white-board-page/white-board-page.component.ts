import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-white-board-page',
  templateUrl: './white-board-page.component.html',
  styleUrls: ['./white-board-page.component.scss']
})
export class WhiteBoardPageComponent implements OnInit {
  userScores = [
    {
      name: 'Alex abernathy',
      score: '3 rounds + 15 reps',
    },
    {
      name: 'Catherine Nettle',
      score: '3 rounds + 15 reps',
    },
    {
      name: 'Luke Brandon',
      score: '3 rounds + 15 reps',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
