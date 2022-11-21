import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoinService } from '../coin.service';
import { DailyService } from '../daily/daily.service';
import { DailyTask } from '../daily/models';

type TaskType = DailyTask;

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  nameControl = new FormControl('');
  $value!: string;
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private _dailyService: DailyService,
    private _coinservice: CoinService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addDailogTask() {
    if (this.nameControl.value) {this.$value = this.nameControl.value;
    this._dailyService.createTask(this.$value);
    this.nameControl.reset();
    this._dailyService.setCount();
    this._coinservice.setCount();

    this.dialogRef.close();

    console.log(this.$value);}
  }
}
