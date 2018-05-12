import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgotusername',
  templateUrl: './forgotusername.component.html',
  styleUrls: ['./forgotusername.component.css']
})
export class ForgotusernameComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  redirectLogin() {
    console.log('redirectLogin Page');
    this.router.navigate(['/login']);
  }
}
