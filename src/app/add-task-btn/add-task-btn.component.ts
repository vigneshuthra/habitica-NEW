import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailyService } from '../daily/daily.service';
import { HabitService } from '../habits/habits.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { TodoService } from '../todo-list/todo-list.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-task-btn',
  templateUrl: './add-task-btn.component.html',
  styleUrls: ['./add-task-btn.component.scss'],
})
export class AddTaskBtnComponent implements OnInit {
  constructor(public dialog: MatDialog, public dailogDailyService: DailyService, public dialogTodoService: TodoService, public dialogHabitService: HabitService) {}

  ngOnInit(): void {}

  openDailyDialog(): void {
    this.dailogDailyService.openDailyDialog();
  }

  openTodoDialog(): void {
    this.dialogTodoService.openTodoDialog();
  }

  openHabitDialog(): void {
    this.dialogHabitService.openHabitDialog();
  }
 
}
