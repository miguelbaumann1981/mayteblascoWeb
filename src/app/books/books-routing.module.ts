import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bibliography',
        component: BibliographyComponent,
      },
      {
        path: 'bookDetail',
        component: BookInfoComponent
      },
      {
        path: '**',
        redirectTo: 'bibliography'
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
