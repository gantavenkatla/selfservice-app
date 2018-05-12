import { TestBed, inject } from '@angular/core/testing';

import { ForgotusernameService } from './forgotusername.service';

describe('ForgotusernameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForgotusernameService]
    });
  });

  it('should be created', inject([ForgotusernameService], (service: ForgotusernameService) => {
    expect(service).toBeTruthy();
  }));
});
