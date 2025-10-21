import { TestBed } from '@angular/core/testing';

import { JoboffreService } from './joboffre.service';

describe('JoboffreService', () => {
  let service: JoboffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoboffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
