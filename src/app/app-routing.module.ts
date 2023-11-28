import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LandingComponent } from './main/landing/landing.component';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: LandingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
