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
    console.log(this.value, "check");
    
  }


}
