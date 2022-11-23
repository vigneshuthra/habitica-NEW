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
    this.createTask({ task: name, type: 'DAILY', status: 'DUE' });
    this.setCount();

    //console.log(typeof name, 'print');

   // this._dailyService.setCount();
   // this._dailyService.createTask(name);
  }



}
