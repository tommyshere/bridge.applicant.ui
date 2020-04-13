import { TestBed } from '@angular/core/testing';

import { OpenJobService } from './open-job.service';

describe('OpenJobService', () => {
  let service: OpenJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
