import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { DailyTask } from '../daily/models';
import { HomeService } from '../home/home.service';
import { TodoTask } from '../todo-list/todomodels';
import { ItemType } from './item.data';

type TaskType = DailyTask | TodoTask;

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  nameControl = new FormControl('');

  public filteredData$: Observable<TaskType[]> | null = null;

  @Input() public type: ItemType | null = null;
  @Input() public initialData$: Observable<TaskType[]> | null = null;
  @Input() public onAddItem: Function | null = null;

  addValue: any;
  IsChecked: boolean;
  private _unsubscribe$ = new Subject<void>();

  constructor(private _homeService: HomeService) {
    this.IsChecked = false;
  }
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
  counter = 0;

  addTask() {
    if (this.onAddItem) {
      
      this.onAddItem(this.nameControl.value);
      this.nameControl.reset();
    }
  }
  markDone(value: any) {}

  removeTask(index: any) {
   
  }

  drop(event: CdkDragDrop<string[]>, data: TaskType[]) {
    moveItemInArray(data, event.previousIndex, event.currentIndex);
  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }

  private _filterData(
    value: string | null,
    data: Array<DailyTask | TodoTask>
  ): Array<DailyTask | TodoTask> {
    
    return value
      ? data.filter((dailyItem) =>
          dailyItem.task.toLowerCase().includes(value.toLowerCase())
        )
      : data;
  }

}
