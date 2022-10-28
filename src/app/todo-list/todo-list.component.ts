import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoService } from './todo-list.service';
import { TodoTask } from './todomodels';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  @ViewChild('textInput')
  titleInputReference!: ElementRef;


  TodoList: TodoTask[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  IsChecked: boolean;
  constructor(private formBuilder: FormBuilder, private todoService: TodoService) {
    this.IsChecked = false;
  }

  ngOnInit(): void {}
  counter = 0;

  addTask() {
    this.todoService.createTask(this.titleInputReference.nativeElement.value);
    this.TodoList= this.todoService.getTodoTask();
    this.counter++;
    this.newTodoForm.reset();
  }
  markDone(value: any) {}

  removeTask(i: any) {
    this.TodoList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.TodoList));
    this.counter--;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.TodoList, event.previousIndex, event.currentIndex);
  }
  
  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }
}
