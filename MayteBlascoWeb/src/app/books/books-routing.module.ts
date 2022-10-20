import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'bibliography',
        component: BibliographyComponent
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
