import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DailyTask } from '../daily/models';
import { TodoTask } from './todomodels';

@Injectable({ providedIn: 'root' })
export class TodoService {
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
    this.createTask({ task: name, type: 'TODO', status: 'ACTIVE' });
    this.setCount();

  }

}
