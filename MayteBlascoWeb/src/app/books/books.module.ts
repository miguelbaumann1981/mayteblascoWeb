import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';


@NgModule({
  declarations: [
    BibliographyComponent,
    BookInfoComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
