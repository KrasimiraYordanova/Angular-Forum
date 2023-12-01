import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator, matchingPasswordsGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
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
  
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerHandler() {
    // console.log(this.registerForm.value);
    if(this.registerForm.invalid) return;
    const {username, email, pass: {password, rePassword} = {}, tel, countryCode} = this.registerForm.value;
    const phoneNumber = `${countryCode} ${tel}`;
    this.authService.register(username!, email!, password!, rePassword!, phoneNumber!)
    .subscribe(result => console.log(result));
  }
}
