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

  countdata: number = 0; 

  constructor(
    private _habitService: HabitService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
   
    this.habitList$ = this._habitService.getHabitsObservable();
  }

  public addHabit(name: string) {
    
    this._habitService.createTask(name);
  }

  onUpdatedCounter(value: number): void {
    this.countdata++;  }

    onDecrementCounter(value: number): void{
      this.countdata--;
      }

}
