import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoinService } from '../../coin.service';

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
  @Output()
  checkTask = new EventEmitter<any>();

  @Output() removeCheck = new EventEmitter<any>();

  constructor(private _coinservice: CoinService) {
    this.IsChecked = false;
  }

  ngOnInit(): void {}

  removeTask(index: any) {
    this.inputDataChange.emit(true);
  }

  onChange($event: any, name: any) {
    if ($event.checked) {
      this.checkTask.emit(this.value);
      this._coinservice.setCount();
    } else {
      this.removeCheck.emit(this.value)

      this._coinservice.decrementCount();

      console.log('the task is removed');
    }

    //MatCheckboxChange {checked,MatCheckbox}
  }
}
