import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  taskList: any[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  IsChecked: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.IsChecked = false;
  }

  ngOnInit(): void {}

  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.taskList.push({ id: this.taskList.length, name: value });
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
    this.newTodoForm.reset();
  }
  markDone(value: any) {}

  removeTask(i: any) {
    this.taskList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.taskList));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
  
  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }
}
