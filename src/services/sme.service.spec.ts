import { TestBed } from '@angular/core/testing';

import { SMEService } from './sme.service';

describe('SMEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SMEService = TestBed.get(SMEService);
    expect(service).toBeTruthy();
  });
});
