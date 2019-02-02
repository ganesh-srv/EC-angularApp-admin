import { TestBed } from '@angular/core/testing';

import { LocationCardService } from './location-card.service';

describe('LocationCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationCardService = TestBed.get(LocationCardService);
    expect(service).toBeTruthy();
  });
});
