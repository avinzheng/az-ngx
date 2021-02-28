import { TestBed } from '@angular/core/testing';

import { AzNgxService } from './az-ngx.service';

describe('AzNgxService', () => {
  let service: AzNgxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzNgxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
