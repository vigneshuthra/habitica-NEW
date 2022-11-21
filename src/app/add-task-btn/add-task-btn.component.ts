import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskTodoDialogComponent } from '../task-todo-dialog/task-todo-dialog.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  openDailyDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }


  openTodoDialog(): void {
    const todoDialogRef = this.dialog.open(TaskTodoDialogComponent, {
      width: '500px',
      height: '500px',
    });

    todoDialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

}
