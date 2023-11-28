import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ThemeModule } from '../theme/theme.module';
import { PostModule } from '../post/post.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
    PostModule
  ],
  exports: [
    HomeComponent,
    LandingComponent
  ]
})
export class MainModule { }
