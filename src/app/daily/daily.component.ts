import { Component, Input, OnInit } from '@angular/core';
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

  countdata: number = 0;
  constructor(
    public _dailyService: DailyService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.dailyList$ = this._dailyService.getDailiesObservable();
  }

  public onAddDaily(name: string) {
    this._dailyService.addDaily(name)
    // console.log(typeof name, 'print');
    // this._dailyService.setCount();
    // this._dailyService.createTask(name);
  }
  
  

}
