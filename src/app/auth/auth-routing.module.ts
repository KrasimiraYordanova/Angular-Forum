import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    }
  },
  {
    path: 'auth/logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
