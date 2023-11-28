import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDetailComponent,
    CreateThemeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule
  ],
  exports: [
    ThemesComponent,
    ThemeDetailComponent,
    CreateThemeComponent,
  ]
})
export class ThemeModule { }
