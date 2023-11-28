import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements DoCheck{

  isLogged = false;

  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLogged = this.authService.isLoggedIn;
  }

}
