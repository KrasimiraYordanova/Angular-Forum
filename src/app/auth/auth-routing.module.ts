import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardActivate } from '../shared/guards/authGuard.activate';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        canActivate: [AuthGuardActivate],
        component: LoginComponent,
        data: {
          title: 'Login',
          loginRequired: false
        }
      },
      {
        path: 'register',
        canActivate: [AuthGuardActivate],
        component: RegisterComponent,
        data: {
          title: 'Register',
          loginRequired: false
        }
      },
      {
        path: 'profile',
        canActivate: [AuthGuardActivate],
        component: ProfileComponent,
        data: {
          title: 'Profile',
          loginRequired: true
        }
      },
      {
        path: 'logout',
        canActivate: [AuthGuardActivate],
        component: LogoutComponent,
        data: {
          title: 'Profile',
          loginRequired: true
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
