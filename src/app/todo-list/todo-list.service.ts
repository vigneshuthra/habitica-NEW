import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DailyTask } from "../daily/models";
import { TodoTask } from "./todomodels";

@Injectable({ providedIn: 'root' })

export class TodoService{
    private _todos$ = new BehaviorSubject<DailyTask[]>([]); 

    public getTodos(): TodoTask[] {
        return this._todos$.getValue();
      }
    
      public setTodos(data: TodoTask[]): void {
        this._todos$.next(data);
      }
    
      public getTodosObservable(): Observable<TodoTask[]> {
        return this._todos$.asObservable();
      }
    
      public createTask(newTask: string): void{
    
        console.log( "check");
    
          const todoTask: TodoTask = { task: newTask, type: 'TODO' };
          this.setTodos([todoTask, ...this.getTodos()])
      }

}