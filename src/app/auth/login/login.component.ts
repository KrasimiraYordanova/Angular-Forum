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

  loginHandler(form: NgForm): void {
    console.log(form);
    if(form.invalid) return;
    const {email, password} = form.value;
    console.log(email, password);
    // this.authService.user = {
    //   username: "Aiden",
    //   email: "aidenj@gmail.com"
    // } as any

    // const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    // this.router.navigate([returnUrl]);
  }

}
