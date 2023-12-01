import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = null
  // { 
  //   username: "Jo",
  //   email: "john.doe@gmail.com",
  //   tel: "00447477298592"
  // } as any;

  get isLoggedIn() {
    return this.user != null;
  }

  constructor() { }
}
