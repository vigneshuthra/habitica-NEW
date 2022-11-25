import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { CoinService } from '../coin.service';
import { DailyService } from '../daily/daily.service';
import { DailyTask } from '../daily/models';
import { HabitTask } from '../habits/habitmodels';
import { HabitService } from '../habits/habits.service';
import { HomeService } from '../home/home.service';
import { TodoService } from '../todo-list/todo-list.service';
import { TodoTask } from '../todo-list/todomodels';
import { ItemType } from './item.data';

type TaskType = DailyTask | TodoTask | HabitTask ;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  nameControl = new FormControl('');

  public filteredData$: Observable<TaskType[]> | null = null;

  public arrayChecked: TaskType[] = [];

  @Input() public type: ItemType | null = null;
  @Input() public initialData$: Observable<TaskType[]> | null = null;
  @Input() public onAddItem: Function | null = null;
  @Input()
  count: number = 0;
  @Output() countUpdatePlus = new EventEmitter<number>();
  @Output() countUpdateMinus = new EventEmitter<number>();

  coin: number = 1;
  addValue: any;
  data: any;

  constructor(
    private _homeService: HomeService,
    private coinservice: CoinService,
    private _dailyService: DailyService,
    private _todoService: TodoService,
    private _habitservice: HabitService
  ) {}
  ngOnInit(): void {
    if (this.initialData$) {
      this.filteredData$ = combineLatest([
        this._homeService.searchData$,
        this.initialData$,
      ]).pipe(
        map(([searchValue, dailyList]) =>
          this._filterData(searchValue, dailyList)
        )
      );
    }
    // console.log(this.initialData$);
  }

  addTask() {
    if (this.onAddItem) {
      this.onAddItem(this.nameControl.value);
      this.nameControl.reset();
     // this.coinservice.setCount();
    }
  }

  removeTask(data: any, index: any) {
    data.splice(index, 1);

    if (this.type == 'DAILY') this._dailyService.decrementCount();
    else if (this.type == 'TODO') this._todoService.decrementCount();
    else this._habitservice.decrementCount();
    this.coinservice.decrementCount();
  }

  drop(event: CdkDragDrop<string[]>, data: TaskType[]) {
    moveItemInArray(data, event.previousIndex, event.currentIndex);
  }

  private _filterData(
    value: string | null,
    data: Array<DailyTask | TodoTask| HabitTask>
  ): Array<DailyTask | TodoTask | HabitTask> {
    return value
      ? data.filter((dailyItem) =>
          dailyItem.task.toLowerCase().includes(value.toLowerCase())
        )
      : data;
  }

  addCheckedTask($event: any, data: any): void {
    
    this.arrayChecked.push($event);
    console.log('the task is added', this.arrayChecked);
  }

  displaylist(){
    const selectList$ = this.arrayChecked.map((checked, index) => checked ? this.arrayChecked[index] : null)
    .filter(value => value !== null);
    console.log(selectList$);
    
  }

  removeCheckedTask($event:any, data:any){
    const index = this.arrayChecked.findIndex(list => list.task);
    this.arrayChecked.splice(index, 1);
    console.log(this.arrayChecked);
    

  }
}
