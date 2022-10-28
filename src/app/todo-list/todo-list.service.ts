import { Injectable } from "@angular/core";
import { TodoTask } from "./todomodels";

@Injectable({ providedIn: 'root' })

export class TodoService{
    private TodoList: TodoTask[]=[];

    getTodoTask(){
        return this.TodoList;
    }
    
    createTask(newTask: string){
    
        if(newTask.length!=0){
            const todoobj= {Task:newTask};
            this.TodoList.push(todoobj);
        }
    }

}