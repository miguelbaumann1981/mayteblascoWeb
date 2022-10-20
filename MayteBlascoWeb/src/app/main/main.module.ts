import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    HomeComponent,
    AwardsComponent,
    InterviewsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
