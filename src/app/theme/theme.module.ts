import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesComponent,
    ThemeDetailComponent
  ]
})
export class ThemeModule { }
