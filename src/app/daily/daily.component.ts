import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DailyService } from './daily.service';
import { DailyTask } from './models';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})


export class DailyComponent implements OnInit {
  
  public dailyList$: Observable<DailyTask[]> | null = null;
  public filteredDailyList$: Observable<DailyTask[]> | null = null;

  private _unsubscribe$ = new Subject<void>();

  constructor(
    private _dailyService: DailyService,
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

  this.dailyList$ = this._dailyService.getDailiesObservable();

  }

  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  public addDaily(name: string){
    
    console.log(typeof name, "print");

    this._dailyService.createTask(name);

  }
}

