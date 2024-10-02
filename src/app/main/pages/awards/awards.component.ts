import { Component, OnInit } from '@angular/core';
import { awardsInfo, shortStoriesInfo } from 'src/assets/data/awards.data';
import { AwardItem } from '../../interfaces/awards.interface';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  public awardsList: AwardItem[] = awardsInfo;
  public shortStoriesList: AwardItem[] = shortStoriesInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
