import { TestBed } from '@angular/core/testing';

import { ContGuard } from './cont.guard';

describe('ContGuard', () => {
  let guard: ContGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
