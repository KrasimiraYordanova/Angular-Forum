import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit{

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/auth/login"]);
      },
      // TODO: change error function
      error: (err) => {
        this.router.navigate(["/auth/login"]);
      }
    })
  }
}