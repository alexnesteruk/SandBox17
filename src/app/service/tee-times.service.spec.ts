import { TestBed } from '@angular/core/testing';

import { TeeTimesService } from './tee-times.service';

describe('TeeTimesService', () => {
  let service: TeeTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeeTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
