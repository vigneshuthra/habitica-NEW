import { Injectable } from "@angular/core";
import { DailyTask } from "./models";

@Injectable({ providedIn: 'root' })

export class DailyService{
    private ListDaily: DailyTask[]=[];


getDailyTask(){
    return this.ListDaily;
}

createTask(newTask: string){

    if(newTask.length!=0){
        const dailyobj= {Task:newTask};
        this.ListDaily.push(dailyobj);
    }
}

}