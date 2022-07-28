import { TestBed } from '@angular/core/testing';

import { TokenInterceptorApisPeruService } from './token-interceptor-apis-peru.service';

describe('TokenInterceptorApisPeruService', () => {
  let service: TokenInterceptorApisPeruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorApisPeruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
