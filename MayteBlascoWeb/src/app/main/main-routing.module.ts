import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'aboutMe',
        component: AboutMeComponent
      },
      {
        path: 'awards',
        component: AwardsComponent
      },
      {
        path: 'interviews',
        component: InterviewsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        redirectTo: 'home'
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
export class MainRoutingModule { }
