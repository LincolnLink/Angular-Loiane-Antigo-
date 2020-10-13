import { TestBed } from '@angular/core/testing';

import { VerificaEmailService } from './verifica-email.service';

describe('VerificaEmailService', () => {
  let service: VerificaEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificaEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
