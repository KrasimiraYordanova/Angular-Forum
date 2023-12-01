import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {}

  // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  // this.router.navigate([returnUrl]);

  loginHandler(loginForm: NgForm) {
    if(loginForm.invalid) return;
    const {email, password} = loginForm.value;
    this.authService.login(email!, password!)
    .subscribe(user => {
      this.authService.user = user;
      this.router.navigate(['/theme']);
    });
  }
}
