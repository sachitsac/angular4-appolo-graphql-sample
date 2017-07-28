import { TestBed, inject } from '@angular/core/testing';

import { AppoloDataService } from './appolo-data.service';

describe('AppoloDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppoloDataService]
    });
  });

  it('should be created', inject([AppoloDataService], (service: AppoloDataService) => {
    expect(service).toBeTruthy();
  }));
});
