import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes/themes.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';

const routes: Routes = [
  {
    path: 'theme',
    children: [
      {
        path: '',
        component: ThemesComponent
      },
      {
        path: 'create',
        component: CreateThemeComponent
      },
      {
        path: 'detail/:id',
        component: ThemeDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }