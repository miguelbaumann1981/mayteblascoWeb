import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from '../main/books/book-info/book-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bookInfo',
        component: BookInfoComponent
      },
      {
        path: '**',
        redirectTo: 'bookInfo'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
