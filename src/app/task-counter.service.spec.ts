import { TestBed } from '@angular/core/testing';

import { TaskCounterService } from './task-counter.service';

describe('TaskCounterService', () => {
  let service: TaskCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
