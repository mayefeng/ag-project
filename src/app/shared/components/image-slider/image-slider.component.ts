import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

export interface ImageSlider {
  id: number;
	imgUrl: string;
	link: string;
	caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2
  selectedIndex = 0;
  intervalId;
  // 没在ngFor或ngIf下是静态的
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;

  @ViewChildren('img') imgs: QueryList<ElementRef>;

  constructor(private rd2: Renderer2) {// 依赖注入

  }
  ngOnInit() {
  	// console.log('ngOnInit', this.imgSlider)
  	// this.imgSlider.nativeElement.innerHTML = '<span>Hello</span>'
  }

  ngAfterViewInit(): void {
  // 	console.log('ngAfterViewInit', this.imgs)
  // 	// this.imgs.forEach(item => item.nativeElement.style.height = '100px')
  // 	this.imgs.forEach(item => {
  // 		this.rd2.setStyle(item.nativeElement, 'height', '100px')
  // 	})
    let i = 0;
  	this.intervalId = setInterval(() => {
  		this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
  	}, this.intervalBySeconds * 1000)
  }

  ngOnDestory():void {
  	clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
  	return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length
  }

  handleScroll(ev) {
  	const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth
  	this.selectedIndex = Math.round(ratio)
  }

  getMessage() {
  	console.log('getMessage')
  }

}
