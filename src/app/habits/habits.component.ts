import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HomeService } from '../home/home.service';
import { HabitTask } from './habitmodels';
import { HabitService } from './habits.service';

@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent implements OnInit {
  public habitList$: Observable<HabitTask[]> | null = null;
  public filteredHabitList$: Observable<HabitTask[]> | null = null;

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _habitService: HabitService,
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
    this.habitList$ = this._habitService.getHabitsObservable();
  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public addHabit(name: string) {
    
    this._habitService.createTask(name);
  }
}
