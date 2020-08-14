import { TestBed } from '@angular/core/testing';

import { SetGetService } from './set-get.service';

describe('SetGetService', () => {
  let service: SetGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
