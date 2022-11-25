import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinService } from '../coin.service';
import { TaskDialogComponent } from '../components/task-dialog/task-dialog.component';
import { DailyTask } from '../components/daily/models';

@Injectable({ providedIn: 'root' })
export class DailyService {

  private _dailies$ = new BehaviorSubject<DailyTask[]>([]); 

  constructor(private _dialog: MatDialog, private coinservice:CoinService) {}

  public getDailies(): DailyTask[] {
    return this._dailies$.getValue();
  }

  public setDailies(data: DailyTask[]): void {
    this._dailies$.next(data);
  }

  public getDailiesObservable(): Observable<DailyTask[]> {
    return this._dailies$.asObservable();
  }

  public createTask(newTask: DailyTask): void{

    console.log( "createTask", newTask);
    this.setDailies([newTask, ...this.getDailies()])
  }

  public count = 0;

  public setCount(){
    this.count++ 
  }
  
  public getCount():number{
    return this.count;

  }

  public decrementCount(){
    this.count--;
  }


  public addDaily(name: string) {
    if(name)
    this.createTask({ task: name, type: 'DAILY', status: 'DUE' });
    this.setCount();
    this.coinservice.setCount();

    //console.log(typeof name, 'print');

   // this._dailyService.setCount();
   // this._dailyService.createTask(name);
  }

  public openDailyDialog(): void {
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
      
      this.addDaily(result);
      console.log('The dialog was closed');
    });
  }


  }
