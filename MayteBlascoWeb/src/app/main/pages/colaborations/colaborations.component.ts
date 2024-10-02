import { Component, OnInit } from '@angular/core';
import { InterviewItem } from '../../interfaces/interview.interface';
import { colaborationsInfo } from 'src/assets/data/interviews.data';

@Component({
  selector: 'app-colaborations',
  templateUrl: './colaborations.component.html',
  styleUrls: ['./colaborations.component.scss']
})
export class ColaborationsComponent {

  public colaborationsList: InterviewItem[] = colaborationsInfo;

  constructor() { }

  goTo(url: string): void {
    window.open(url, '_blank');
  }

}
