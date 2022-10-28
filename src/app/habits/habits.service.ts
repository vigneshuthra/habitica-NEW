import { Injectable } from "@angular/core";
import { HabitTask } from "./habitmodels";

@Injectable({ providedIn: 'root' })

export class HabitService {

    private ListHabit: HabitTask[]=[];

    getHabitTask(){
        return this.ListHabit;
    }
    
    createTask(newTask: string){
    
        if(newTask.length!=0){
            const habitobj= {Task:newTask};
            this.ListHabit.push(habitobj);
        }
    }

}