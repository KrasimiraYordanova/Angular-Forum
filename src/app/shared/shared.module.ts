import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MatchingPasswordsDirective } from './validators/matching-passwords.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent,
    EmailValidatorDirective,
    MatchingPasswordsDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent,
    EmailValidatorDirective,
    MatchingPasswordsDirective
  ]
})
export class SharedModule { }
