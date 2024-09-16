import { TestBed } from '@angular/core/testing';

import { MentalProgramService } from './mental-program.service';

describe('MentalProgramService', () => {
  let service: MentalProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentalProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
