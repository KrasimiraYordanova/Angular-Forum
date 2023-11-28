import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ThemeModule } from './theme/theme.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    ThemeModule,
    PostModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
