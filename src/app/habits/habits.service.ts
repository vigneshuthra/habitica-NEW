import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HabitTask } from './habitmodels';

@Injectable({ providedIn: 'root' })
export class HabitService {
  private _habits$ = new BehaviorSubject<HabitTask[]>([]);

  public getHabits(): HabitTask[] {
    return this._habits$.getValue();
  }

  public setHabits(data: HabitTask[]): void {
    this._habits$.next(data);
  }

  public getHabitsObservable(): Observable<HabitTask[]> {
    return this._habits$.asObservable();
  }

  public createTask(newTask: HabitTask): void {
    console.log('CreateTask', newTask);

    this.setHabits([newTask, ...this.getHabits()]);
  }

  public count = 0;

  public setCount() {
    this.count++;
  }

  public getCount(): number {
    return this.count;
  }

  public decrementCount() {
    this.count--;
  }
  public addHabit(name: string): void {
    this.createTask({ task: name, type: 'HABIT', status: 'STRONG' });
    this.setCount();
  }
}
