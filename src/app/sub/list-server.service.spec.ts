import { TestBed } from '@angular/core/testing';

import { ListServerService } from './list-server.service';

describe('ListServerService', () => {
  let service: ListServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
