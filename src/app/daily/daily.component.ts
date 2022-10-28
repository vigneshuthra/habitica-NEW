import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DailyService } from './daily.service';
import { DailyTask } from './models';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  @ViewChild('textInput')
  titleInputReference!: ElementRef;


  dailyList: DailyTask[] = [];

  newTodoForm = this.formBuilder.group({
    todoItem: '',
  });
  addValue: any;
  IsChecked: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private dailyService:DailyService) {
    this.IsChecked = false;
  }

  ngOnInit(): void {}
  counter =0;

  addTask() {
    this.dailyService.createTask(this.titleInputReference.nativeElement.value);
    this.dailyList= this.dailyService.getDailyTask();
    this.counter ++;
    this.newTodoForm.reset();
  }
  markDone(value: any) {}

  removeTask(i: any) {
    this.dailyList.splice(i, 1);
    window.localStorage.setItem('task', JSON.stringify(this.dailyList));
    this.counter --;

  }

  
  removeData(i: any) {
    this.addValue.splice(i, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dailyList, event.previousIndex, event.currentIndex);
  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }

  getData() {
    window.localStorage.getItem(this.dailyList.toString());

    console.log(this.dailyList);
  }
}
