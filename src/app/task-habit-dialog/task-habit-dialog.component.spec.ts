import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHabitDialogComponent } from './task-habit-dialog.component';

describe('TaskHabitDialogComponent', () => {
  let component: TaskHabitDialogComponent;
  let fixture: ComponentFixture<TaskHabitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskHabitDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskHabitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
