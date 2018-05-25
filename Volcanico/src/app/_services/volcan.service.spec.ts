import { TestBed, inject } from '@angular/core/testing';

import { VolcanService } from './volcan.service';

describe('VolcanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolcanService]
    });
  });

  it('should be created', inject([VolcanService], (service: VolcanService) => {
    expect(service).toBeTruthy();
  }));
});
