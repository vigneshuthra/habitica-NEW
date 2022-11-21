import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent implements OnInit {

public coom : Observable<number> | null=null;
constructor(private coinservice: CoinService) { }

  ngOnInit(): void {
   //this.coom = this.coinservice.getCount();
  }

}
