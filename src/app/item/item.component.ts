import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input()
  value: any;
  IsChecked: boolean;

  @Output() inputDataChange: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.IsChecked = false;
  }

  ngOnInit(): void {}

  removeTask(index: any) {
    this.inputDataChange.emit(true);
  }

  onChange($event: any) {
    if ($event.checked) console.log('the task is added');
    else console.log('the task is removed');

    //MatCheckboxChange {checked,MatCheckbox}
  }
}
