import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DailyTask } from '../daily/models';
import { HomeService } from '../home/home.service';
import { TodoService } from './todo-list.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})


export class TodoListComponent implements OnInit {

  public todoList$: Observable<DailyTask[]> | null = null;
  public filteredTodoList$: Observable<DailyTask[]> | null = null;

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _todoService: TodoService,
    private _homeService: HomeService
  ) {}
  
  ngOnInit(): void {
    this._homeService.searchData$
    .pipe(takeUntil(this._unsubscribe$))
    .subscribe((searchValue) => {
      // if (!searchValue) {
      //   // do some clearing actions
      // }
      // this.filterData(searchValue);
    });
    this.todoList$ = this._todoService.getTodosObservable();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public addTodo(name: string){
    
    console.log(typeof name, "print");

    this._todoService.createTask(name);

  }
}
