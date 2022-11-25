import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoinService } from '../coin.service';
import { DailyTask } from '../daily/models';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TodoTask } from './todomodels';

@Injectable({ providedIn: 'root' })
export class TodoService {

  constructor(private _dialog: MatDialog, private coinservice:CoinService) {}


  private _todos$ = new BehaviorSubject<TodoTask[]>([]);

  public getTodos(): TodoTask[] {
    return this._todos$.getValue();
  }

  public setTodos(data: TodoTask[]): void {
    this._todos$.next(data);
  }

  public getTodosObservable(): Observable<TodoTask[]> {
    return this._todos$.asObservable();
  }

  public createTask(newTask: TodoTask): void {
    console.log('createTask', newTask);

    this.setTodos([newTask, ...this.getTodos()]);
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

  public addTodo(name: string): void{
    if(name)
    this.createTask({ task: name, type: 'TODO', status: 'ACTIVE' });
    this.setCount();
    this.coinservice.setCount();

  }

  public openTodoDialog(): void {
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
      this.addTodo(result);
      console.log('The dialog was closed');
    });
  }

}
