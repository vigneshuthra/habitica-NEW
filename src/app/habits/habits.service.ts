import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinService } from '../coin.service';
import { DailyTask } from '../daily/models';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { HabitTask } from './habitmodels';

@Injectable({ providedIn: 'root' })
export class HabitService {

  constructor(public _dialog: MatDialog, private coinservice:CoinService) {}


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
    if(name)
    this.createTask({ task: name, type: 'HABIT', status: 'STRONG' });
    this.setCount();
    this.coinservice.setCount();
  }

  public openHabitDialog(): void {
    const dialogConfig: MatDialogConfig = {
      width: '500px',
      height: '500px',
    };

    dialogConfig.data = {
      type: 'taskType',
      title: 'Your dialog title',
    };
    const dialogRef = this._dialog.open(TaskDialogComponent, dialogConfig);

    // result is name of new task
    // result is interface {name: string; description: string; ...}
    dialogRef.afterClosed().subscribe((result: string) => {
      // here you will recieve eveverything which you put in dialog.close() param
      this.addHabit(result);
      console.log('The dialog was closed');
    });
  }

}
