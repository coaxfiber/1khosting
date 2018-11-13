import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PersonInformationComponent } from './general/person-information/person-information.component';
import { UpdatePersonComponent } from './general/update-person/update-person.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent,
      children: [
        { path: 'home', component: HomeComponent, outlet: 'div' },
        { path: 'person-information', component: PersonInformationComponent, outlet: 'div' },
        { path: 'update-person', component: UpdatePersonComponent, outlet: 'div' },
      ]
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
