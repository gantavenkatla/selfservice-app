import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegistrationService {
  private baseUrl = '';
  result:any;

  constructor(private http: HttpClient) { }
  register(payload) {
    //return this.http.post(`${this.baseUrl}/api/v1/register`, payload);
    //return payload;
    return this.http.post("/api/register",payload);
  }
  // getUsers() {
  //   return this.http.get("/api/users")
  //     .map(result => this.result = result.json().data);
  // }
}
