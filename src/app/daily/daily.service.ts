import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DailyTask } from './models';

@Injectable({ providedIn: 'root' })
export class DailyService {

  private _dailies$ = new BehaviorSubject<DailyTask[]>([]); 

  public getDailies(): DailyTask[] {
    return this._dailies$.getValue();
  }

  public setDailies(data: DailyTask[]): void {
    this._dailies$.next(data);
  }

  public getDailiesObservable(): Observable<DailyTask[]> {
    return this._dailies$.asObservable();
  }

  public createTask(newTask: string): void{

    console.log( "check");

      const dailyTask: DailyTask = { task: newTask, type: 'DAILY' };
      this.setDailies([dailyTask, ...this.getDailies()])
  }
}
