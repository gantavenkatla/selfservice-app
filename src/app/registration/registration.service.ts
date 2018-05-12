import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class RegistrationService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }
  register(payload) {
    return this.http.post(`${this.baseUrl}/api/v1/register`, payload);
    //return payload;


  }

}
