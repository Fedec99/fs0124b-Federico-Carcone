import { TestBed } from '@angular/core/testing';
import { DbService } from './post-service.service';

describe('PostServiceService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
