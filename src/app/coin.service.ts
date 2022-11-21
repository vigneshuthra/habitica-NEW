import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  public coin = 10;

  setCount(){
    this.coin =this.coin + 10; 
  }
  getCount():number{
    return this.coin;

  }

  decrementCount(){
    this.coin=this.coin-10;
  }
  
  }
