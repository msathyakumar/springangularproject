import { TestBed } from '@angular/core/testing';

import { PensionerProcessService } from './pensioner-process.service';

describe('PensionerProcessService', () => {
  let service: PensionerProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionerProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
