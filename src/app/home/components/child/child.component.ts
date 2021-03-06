import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title;
  _time;
  @ViewChild('timeRef', {static: true}) timeRef: ElementRef
  public get title(): string {
    console.log('脏值检测')
    return this._title
  }

  public get time(): number {
    return this._time;
  }

  constructor(private ngZone: NgZone, private rd: Renderer2) {
    this._title = 'hi'
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // this._title = '您好'
        // this._time = Date.now()
        // this.timeRef.nativeElement.innerText  = Date.now()
        this.rd.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans'))
        // formatDate就是Date管道
      },100)
    })
  }

  handleClick() {

  }

}
