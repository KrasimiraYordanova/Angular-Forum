import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { ThemeMainComponent } from './theme-main/theme-main.component';
import { AuthGuardActivate } from '../shared/guards/authGuard.activate';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: '',
        component: ThemeMainComponent,
        data: {
          title: 'Themes',
          loginRequired: false
        }
      },
      {
        path: 'create',
        component: CreateThemeComponent,
        canActivate: [AuthGuardActivate],
        data: {
          title: 'Create Theme',
          loginRequired: true
        }
      },
      {
        path: 'detail/:id',
        component: ThemeDetailComponent,
        data: {
          title: 'Theme info',
          loginRequired: false
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
