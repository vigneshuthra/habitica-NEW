import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeService } from './home.service';

interface DataStructure {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataSource$ = new BehaviorSubject<DataStructure[]>([]);

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {}

  onSearch(value: string | null) {
    this._homeService.searchData$.next(value);
  }
}
