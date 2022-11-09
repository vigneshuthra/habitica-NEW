import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemType } from '../item-list/item.data';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  [x: string]: any;

  @Input()
  value: any;
  IsChecked: boolean;
  @Output() inputDataChange: EventEmitter<any> = new EventEmitter();


  @Input() dailyList: any;

  constructor() {
    this.IsChecked = false;
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this['allList'], event.previousIndex, event.currentIndex);
  }

  OnChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

  }


removeTask(i: any){
  this.inputDataChange.emit(true); 

}
  
}
