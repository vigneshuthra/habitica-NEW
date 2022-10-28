import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HabitService } from './habits.service';
import { HabitTask } from './habitmodels';


@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent implements OnInit {
  @ViewChild('textInput')
  titleInputReference!: ElementRef;


  habitList: HabitTask[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  IsChecked: boolean;
  constructor(private formBuilder: FormBuilder, private habitService : HabitService) {
    this.IsChecked = false;

  }
 

  ngOnInit(): void {}

  counter=0;

  addTask() {
    this.habitService.createTask(this.titleInputReference.nativeElement.value);
    this.habitList= this.habitService.getHabitTask();
    this.counter++;
    console.log(this.counter);
    this.newTodoForm.reset();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.habitList, event.previousIndex, event.currentIndex);
  }

  removeTask(i: any) {
    this.habitList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.habitList));
    this.counter--;
    console.log(this.counter);

  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }

}
