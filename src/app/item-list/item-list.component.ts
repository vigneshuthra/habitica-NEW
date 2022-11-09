import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DailyService } from '../daily/daily.service';
import { DailyTask } from '../daily/models';
import { HabitTask } from '../habits/habitmodels';
import { HabitService } from '../habits/habits.service';
import { HomeService } from '../home/home.service';
import { TodoService } from '../todo-list/todo-list.service';
import { TodoTask } from '../todo-list/todomodels';
import { ItemType } from './item.data';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @ViewChild('textInput')
  titleInputReference!: ElementRef;

  @Input() public type: ItemType = 'DAILY';

  dailyList: DailyTask[] = [];
  filteredDailyList: DailyTask[] = [];
  filteredTodoList: TodoTask[] = [];
  filteredHabitList: HabitTask[] = [];

  TodoList: TodoTask[] = [];
  habitList: HabitTask[] = [];

  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });

  addValue: any;
  IsChecked: boolean;
  private _unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dailyService: DailyService,
    private todoService: TodoService,
    private habitService: HabitService,
    private _homeService: HomeService
  ) {
    this.IsChecked = false;
  }
  ngOnInit(): void {
    this._homeService.searchData$
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((searchValue) => {
        this.filterData(searchValue);
      });
  }
  counter = 0;

  addTask() {
    if (this.type == 'DAILY') {
      this.dailyService.createTask(
        this.titleInputReference.nativeElement.value
      );
      this.dailyList = this.dailyService.getDailyTask();
      this.filteredDailyList = this.dailyService.getDailyTask();

      console.log(this.type, this.dailyList);
      this.newTodoForm.reset();
    } else if (this.type == 'TODO') {
      this.todoService.createTask(this.titleInputReference.nativeElement.value);
      this.TodoList = this.todoService.getTodoTask();
      this.filteredTodoList = this.todoService.getTodoTask();

      console.log(this.type, this.TodoList);

      this.newTodoForm.reset();
    } else if (this.type == 'HABIT') {
      this.habitService.createTask(
        this.titleInputReference.nativeElement.value,
        this.type
      );
      this.habitList = this.habitService.getHabitTask();
      this.filteredHabitList = this.habitService.getHabitTask();

      console.log(this.type, this.habitList);

      this.newTodoForm.reset();
    }
  }
  markDone(value: any) {}

  removeTask(i: any) {
    if (this.type == 'DAILY') this.dailyList.splice(i, 1);

    if (this.type == 'TODO') this.TodoList.splice(i, 1);
    if (this.type == 'HABIT') this.habitList.splice(i, 1);
  }

  removeData(i: any) {
    this.addValue.splice(i, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.type == 'DAILY')
      moveItemInArray(this.dailyList, event.previousIndex, event.currentIndex);
    if (this.type == 'TODO')
      moveItemInArray(this.TodoList, event.previousIndex, event.currentIndex);
    if (this.type == 'HABIT')
      moveItemInArray(this.habitList, event.previousIndex, event.currentIndex);
  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }

  private filterData(value: string | null): void {
    if (!value) {
      this.filteredDailyList = this.dailyList;
      this.filteredTodoList = this.TodoList;
      this.filteredHabitList = this.habitList;
      return;
    }
    if (this.type == 'DAILY')
      this.filteredDailyList = this.dailyList.filter((dailyItem) =>
        dailyItem.Task.toLowerCase().includes(value.toLowerCase())
      );
    else if( this.type == 'TODO')
    this.filteredTodoList = this.TodoList.filter((todoItem) =>
      todoItem.Task.toLowerCase().includes(value.toLowerCase())
    );
    else( this.type=='HABIT')
    this.filteredHabitList = this.habitList.filter((HabitItem) =>
      HabitItem.Task.toLowerCase().includes(value.toLowerCase())
    );
  }
}
