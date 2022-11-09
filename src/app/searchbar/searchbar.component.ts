import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  private _unsubsribe$ = new Subject<void>();
  constructor() {}

  @Output() onInputChange = new EventEmitter<string | null>();

  public searchControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this._unsubsribe$))
      .subscribe((value) => {
        this.onInputChange.emit(value);
        if (!value) {
          // do something
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubsribe$.next();
    this._unsubsribe$.complete();
  }
}
