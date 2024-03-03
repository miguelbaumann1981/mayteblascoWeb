import { Component, OnInit } from '@angular/core';
import { interviewsInfo } from 'src/assets/data/interviews.data';
import { InterviewItem } from '../../interfaces/interview.interface';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {

  public interviewsList: InterviewItem[] = interviewsInfo;

  constructor() { }

  ngOnInit(): void {
  }

  goTo(url: string): void {
    window.open(url, '_blank');
  }

}
