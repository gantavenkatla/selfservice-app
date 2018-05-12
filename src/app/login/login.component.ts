import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  redirectSignUp() {
    console.log('redirectSignUp');
    this.router.navigate(['/register']);
  }
  redirectFP() {
    console.log('redirectForgotPassword');
    this.router.navigate(['/forgotpassword']);
  }redirectFU() {
    console.log('redirectForgotUsername');
    this.router.navigate(['/forgotusername']);
  }
}
