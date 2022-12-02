import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { DailyService } from '../../services/daily.service';
import { DailyTask } from './models';
import { HomeService } from '../../services/home.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss'],
})
export class DailyComponent implements OnInit {
  public dailyList$ = new BehaviorSubject<DailyTask[]>([]);
  public filteredDailyList$: Observable<DailyTask[]> | null = null;

  public dailyTypeControl = new FormControl('ALL');
  private _unsubcribe$ = new Subject<void>();
  
  countdata: number = 0;
  constructor(
    public _dailyService: DailyService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
   // this.dailyList$ = this._dailyService.getDailiesObservable();
   this._dailyService
      .getDailiesObservable()
      .pipe(takeUntil(this._unsubcribe$))
      .subscribe((data) => {
        this.dailyList$.next(
          this._filterDailies(data, this.dailyTypeControl.value)
        );
      });
    // this.dailyList$ = this._dailyService.getDailiesObservable();

    this.dailyTypeControl.valueChanges
      .pipe(takeUntil(this._unsubcribe$))
      .subscribe((type: string | null) => {
        const allData = this._dailyService.getDailies();
        this.dailyList$.next(this._filterDailies(allData, type));
      });

      
  }

  ngOnDestroy(): void {
    this._unsubcribe$.next();
    this._unsubcribe$.complete();
  }

  public onAddDaily(name: string) {
    this._dailyService.addDaily(name);
    // console.log(typeof name, 'print');
    // this._dailyService.setCount();
    // this._dailyService.createTask(name);
  }

  private _filterDailies(data: DailyTask[], type: string | null): DailyTask[] {
    switch (type) {
      case 'NOT_DUE':
        return data.filter((item) => item.status === 'NOT_DUE');
      case 'DUE':
        return data.filter((item) => item.status === 'DUE');

      default:
        return data;
    }
  }

}
