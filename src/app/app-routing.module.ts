import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      title: 'Error Page'
    }
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: {
      title: 'Page Not Found'
    }
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
