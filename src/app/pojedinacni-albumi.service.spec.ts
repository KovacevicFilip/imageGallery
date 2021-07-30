import { TestBed } from '@angular/core/testing';

import { PojedinacniAlbumiService } from './pojedinacni-albumi.service';

describe('PojedinacniAlbumiService', () => {
  let service: PojedinacniAlbumiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PojedinacniAlbumiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
