import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDetailComponent,
    CreateThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ThemesComponent,
    ThemeDetailComponent
  ]
})
export class ThemeModule { }
