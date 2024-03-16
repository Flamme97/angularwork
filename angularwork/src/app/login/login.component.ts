import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private route: Router,
    private loginService: LoginService,
  ) {}

  ngOnInit(): void {}

  login(){
    if(this.loginService.logIn(this.email, this.password)){
      this.route.navigate(['/rooms'])
    }
  }
}
