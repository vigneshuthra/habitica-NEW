import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DailyTask } from '../daily/models';
import { HomeService } from '../../services/home.service';
import { TodoService } from '../../services/todo-list.service';
import { TodoTask } from './todomodels';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoList$ = new BehaviorSubject<TodoTask[]>([]);
  public filteredTodoList$: Observable<TodoTask[]> | null = null;

  public todotypeControl = new FormControl('ALL');
  private _unsubcribe$ = new Subject<void>();

  countdata: number = 0;

  constructor(
    public _todoService: TodoService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
   // this.todoList$ = this._todoService.getTodosObservable();
   this._todoService
   .getTodosObservable()
   .pipe(takeUntil(this._unsubcribe$))
   .subscribe((data) => {
     this.todoList$.next(
       this._filterTodos(data, this.todotypeControl.value)
     );
   });
 // this.dailyList$ = this._dailyService.getDailiesObservable();

 this.todotypeControl.valueChanges
   .pipe(takeUntil(this._unsubcribe$))
   .subscribe((type: string | null) => {
     const allData = this._todoService.getTodos();
     this.todoList$.next(this._filterTodos(allData, type));
   });

  }

  public addAddTodo(name: string) {
    this._todoService.addTodo(name)

   // console.log(typeof name, 'print');
   // this._todoService.setCount();
   // this._todoService.createTask(name);
  }
 
  private _filterTodos(data: TodoTask[], type: string | null): TodoTask[] {
    switch (type) {
      case 'DONE':
        return data.filter((item) => item.status === 'DONE');
      case 'ACTIVE':
        return data.filter((item) => item.status === 'ACTIVE');

      default:
        return data;
    }
  }

}
