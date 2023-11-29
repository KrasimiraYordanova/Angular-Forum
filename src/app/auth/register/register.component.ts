import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator, matchingPasswordsGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(['com', 'bg'])]],
    countryCode: [''],
    tel: [''],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [matchingPasswordsGroupValidator('password', 'rePassword')]
    })
  })
  
  constructor(private fb: FormBuilder) {}

  registerHandler() {
    console.log(this.registerForm.value);
  }
}
