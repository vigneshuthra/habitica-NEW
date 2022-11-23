import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoinService } from '../coin.service';
import { TodoService } from '../todo-list/todo-list.service';

@Component({
  selector: 'app-task-todo-dialog',
  templateUrl: './task-todo-dialog.component.html',
  styleUrls: ['./task-todo-dialog.component.scss']
})
export class TaskTodoDialogComponent implements OnInit {

  nameControl = new FormControl('');
  $value!: string;
  constructor(
    public todoDialogRef: MatDialogRef<TaskTodoDialogComponent>,
    public _todoservice: TodoService,
    private _coinservice: CoinService

  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.todoDialogRef.close();
  }

  addTodoDailogTask() {
    if (this.nameControl.value) {this.$value = this.nameControl.value;
    //this._todoservice.createTask(this.$value);
    this.nameControl.reset();
    this._todoservice.setCount();
    this._coinservice.setCount();

    this.todoDialogRef.close();

    console.log(this.$value);}
  }

}
