import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodoDialogComponent } from './task-todo-dialog.component';

describe('TaskTodoDialogComponent', () => {
  let component: TaskTodoDialogComponent;
  let fixture: ComponentFixture<TaskTodoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTodoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
