import { Component } from '@angular/core';
import { interviewsInfo } from 'src/assets/data/interviews.data';
import { InterviewItem } from '../../interfaces/interview.interface';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent {

  public interviewsList: InterviewItem[] = interviewsInfo;

  constructor() { }

  goTo(url: string): void {
    window.open(url, '_blank');
  }

}
