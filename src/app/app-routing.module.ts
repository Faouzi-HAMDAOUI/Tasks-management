import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ConsultActiviteComponent } from './components/consult-activite/consult-activite.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'index.html',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'consultAct',
    component: ConsultActiviteComponent
  },
  {
    path: 'consultAct/:id',
    component: ConsultActiviteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
