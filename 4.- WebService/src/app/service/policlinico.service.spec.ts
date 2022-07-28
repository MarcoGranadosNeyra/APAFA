import { TestBed } from '@angular/core/testing';

import { PoliclinicoService } from './policlinico.service';

describe('PoliclinicoService', () => {
  let service: PoliclinicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliclinicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
