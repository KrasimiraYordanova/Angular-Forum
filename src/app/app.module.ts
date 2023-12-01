import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

import { HomeComponent } from './home/home.component';
import { ThemeModule } from './theme/theme.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProvider } from './auth.interceptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticateComponent
  ],
  imports: [
    AuthModule,
    ThemeModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
    authInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
