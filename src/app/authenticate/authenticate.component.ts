import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})

// componant that allows us to have a loader while we are authenticating during login
export class AuthenticateComponent implements OnInit{

  isAuthenticating = true;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.profile().subscribe({
      next: () => {
        this.isAuthenticating = false;
      },
      error: (err) => {
        this.isAuthenticating = false;
      }
    });
  }
}
