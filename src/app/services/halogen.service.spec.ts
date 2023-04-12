import { TestBed } from '@angular/core/testing';

import { HalogenService } from './halogen.service';

describe('HalogenService', () => {
  let service: HalogenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HalogenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
