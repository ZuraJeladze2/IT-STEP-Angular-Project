import { TestBed } from '@angular/core/testing';

import { HTTPModuleService } from './httpmodule.service';

describe('HTTPModuleService', () => {
  let service: HTTPModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
