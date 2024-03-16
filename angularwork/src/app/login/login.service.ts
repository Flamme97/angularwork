import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() {}

  logIn(email: string, password: string) {
    if (email === 'a@a' && password === 'a') {
      this.isLoggedIn = true;
      this.isAdmin = true;
      console.log('admin is logged in')
    }
    console.log('thisshouldnotbeaerror');
    if (email === 'user@gmail.com' && password === 'user') {
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
