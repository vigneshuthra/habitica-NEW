import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.scss'],
})
export class HabitsComponent implements OnInit {
  habitList: any[] = [];
  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  IsChecked: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.IsChecked = false;

  }
 

  ngOnInit(): void {}

  addTask() {
    const value = this.newTodoForm.value.todoItem;
    this.habitList.push({ id: this.habitList.length, name: value });
    window.localStorage.setItem('task', JSON.stringify(this.habitList));
    this.newTodoForm.reset();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.habitList, event.previousIndex, event.currentIndex);
  }

  removeTask(i: any) {
    this.habitList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.habitList));
  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }

}
