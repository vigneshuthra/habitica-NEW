import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DailyTask } from '../daily/models';
import { HomeService } from '../home/home.service';
import { TodoService } from './todo-list.service';
import { TodoTask } from './todomodels';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoList$: Observable<TodoTask[]> | null = null;
  public filteredTodoList$: Observable<TodoTask[]> | null = null;

  countdata: number = 0;

  constructor(
    public _todoService: TodoService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.todoList$ = this._todoService.getTodosObservable();
  }

  public addAddTodo(name: string) {
    this._todoService.addTodo(name)

   // console.log(typeof name, 'print');
   // this._todoService.setCount();
   // this._todoService.createTask(name);
  }
 
}
