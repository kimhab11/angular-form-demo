import { TestBed } from '@angular/core/testing';

import { ArrticleService } from './arrticle.service';

describe('ArrticleService', () => {
  let service: ArrticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
