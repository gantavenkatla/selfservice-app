import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "./registration.service";
import {Router} from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {
  registrationPayload = {
    'username': 'test_user_8@yopmail.com',
    'password': 'Farmers-123',
    'firstName': '',
    'lastName': '',
    'email': '',
    'phoneNumber': '',
  };
  constructor(private registrationService:RegistrationService,private router: Router) {
  }
  error;
  response;
  ngOnInit() {
  }
  register() {
    console.log("Register Clicked",this.registrationPayload);
    this.registrationService.register(this.registrationPayload).subscribe(
      response => {
        this.response = response;
      }, error => {
        this.error = error;
      }
    );
  }

  redirectLogin() {
    console.log('redirectForgotUsername');
    this.router.navigate(['/login']);
  }
}
