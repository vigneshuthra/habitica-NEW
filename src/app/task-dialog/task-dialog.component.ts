import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DailyService } from '../daily/daily.service';
import { DailyTask } from '../daily/models';

type TaskType = DailyTask;


@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  nameControl = new FormControl('');
  @Input() public onAddDialogItem: Function | null = null;

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private _dailyService: DailyService,

  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDailogTask(){
    const value$ =   this.nameControl.value;
  //  this._dailyService.createTask(value$);

      this.nameControl.reset();
      console.log(value$);
      
}

}
