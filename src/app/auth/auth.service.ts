import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user != null;
  }

  constructor(private httpClient: HttpClient) { }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
    return this.httpClient.post<any>(`/api/register`, {username, email, password, rePassword, tel});
  }

  login(email: string, password: string) {
    return this.httpClient.post<any>(`/api/login`, {email, password});
  }
}
