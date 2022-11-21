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
    private _dailyService: DailyService,
  ) {}

  ngOnInit(): void {
    this.dailyList$ = this._dailyService.getDailiesObservable();
  }

  public addDaily(name: string) {
    console.log(typeof name, 'print');
    this._dailyService.createTask(name);
  }

  onUpdatedCounter(value: number): void {
    this.countdata++;
  }

  onDecrementCounter(value: number): void {
    this.countdata--;
  }
}
