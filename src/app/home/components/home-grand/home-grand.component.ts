import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  constructor() { }
  obj = {productId: 2, productName: '手机', type: '全面屏'}
  date: Date;
  price: number;
  data = [1, 2, 3, 4 ,5];
  ngOnInit() {
    this.date = this.minusDays(new Date(), 2);
    this.price = 123.32;
  }
  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
