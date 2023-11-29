import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes/themes.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemeMainComponent } from './theme-main/theme-main.component';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThemesComponent,
    ThemeDetailComponent,
    CreateThemeComponent,
    ThemeMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostModule,
    ThemeRoutingModule,
    FormsModule
  ],
  exports: [
    ThemesComponent,
    ThemeDetailComponent,
    CreateThemeComponent,
    ThemeMainComponent
  ]
})
export class ThemeModule { }
