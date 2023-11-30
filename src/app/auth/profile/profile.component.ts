import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/shared/validators/email-validator';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  editMode: boolean = false;

  get user() {
    const {username, email, tel: phone} = this.authService.user!;
    const [countryCode, ...tel] = phone.split(' ');
    return {
      username,
      email,
      countryCode,
      tel: tel.join(' ')
    }
  }

  profileForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, emailValidator(['com', 'bg'])]],
    countryCode: [''],
    tel: [''],
  })

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm.setValue(this.user);
  }

  profileHandler(): void {
    if(this.profileForm.invalid) return;
    console.log(this.profileForm.value);
    this.authService.user = {
      username: this.profileForm.value.username,
      email: this.profileForm.value.email,
      tel: `${this.profileForm.value.countryCode} ${this.profileForm.value.tel}`
    } as any
    this.toggleEditMode();
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }
}
