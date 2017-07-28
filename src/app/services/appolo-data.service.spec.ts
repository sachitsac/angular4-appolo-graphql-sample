import { TestBed, inject } from '@angular/core/testing';
import { AppoloDataService } from './appolo-data.service';
import { Apollo } from 'apollo-angular';

describe('AppoloDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppoloDataService]
    });
  });

  it('should be created', inject([AppoloDataService, Apollo], (service: AppoloDataService) => {
    expect(service).toBeTruthy();
  }));
});
