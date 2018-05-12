import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(registrationService:RegistrationService) { }

  ngOnInit() {
  }
  register() {
    console.log("Register Clicked");
  }
}
