import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoinService } from '../coin.service';
import { HabitService } from '../habits/habits.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-habit-dialog',
  templateUrl: './task-habit-dialog.component.html',
  styleUrls: ['./task-habit-dialog.component.scss'],
})
export class TaskHabitDialogComponent implements OnInit {
  nameControl = new FormControl('');
  $value!: string;

  constructor(
    public habitDialogRef: MatDialogRef<TaskHabitDialogComponent>,
    private _habitservice: HabitService,
    private _coinservice: CoinService
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.habitDialogRef.close();
  }

  addHabitDailogTask() {
    if (this.nameControl.value) {
      this.$value = this.nameControl.value;
      this._habitservice.createTask(this.$value);
      this.nameControl.reset();
      this._habitservice.setCount();
      this._coinservice.setCount();

      this.habitDialogRef.close();

      console.log(this.$value);
    }
  }
}
