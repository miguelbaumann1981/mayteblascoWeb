import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { HomeComponent } from './pages/home/home.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookInfoComponent } from './books/book-info/book-info.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    BibliographyComponent,
    HomeComponent,
    AwardsComponent,
    InterviewsComponent,
    ContactComponent,
    BookInfoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
