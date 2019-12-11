import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent, Channel } from '../../../shared/components'
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  sub: Subscription;
  name: string = ''
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap
    .pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
    // this.route.paramMap
    // .pipe(
    //   filter(params => params.has('tabLink')),
    //   map(params => params.get('tabLink'))
    // )
    // .subscribe(tabLink => {
    //   console.log('路径参数', tabLink)
    //   this.selectedTabLink = tabLink
    //   this.cd.markForCheck()
    // })
    // this.route.paramMap.subscribe(params => {
    //   console.log('路径参数', params)
    //   this.selectedTabLink = params.get('tabLink')
    //   this.cd.markForCheck()
    // })
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    })
    this.imageSliders$ = this.service.getBanners()
    // this.service.getBanners().subscribe(banners => {
    //   console.log('banners', banners)
    //   this.imageSliders = banners
    //   this.cd.markForCheck()
    // })
    this.channels$ = this.service.getChannels()
    // this.service.getChannels().subscribe(channels => {
    //   console.log(channels)
    //   this.channels = channels
    //   this.cd.markForCheck()
    // })
		// this.imageSliders = this.service.getBanners()
		// this.channels = this.service.getChannels()
  }
	// @ViewChild('imageSlider') imgSlider: ImageSliderComponent;
  // @ViewChild(ImageSliderComponent, {static: true}) imgSlider: ImageSliderComponent;
  @ViewChild('my', {static: true}) myEl: ElementRef;
	@ViewChild(ImageSliderComponent, {static: false}) imgSlider: ImageSliderComponent;
	scrollableTabBgColor = 'red';


  username = '';
  ngAfterViewInit(): void {
    console.log(this.myEl)
  	console.log(this.imgSlider)
  	this.imgSlider.getMessage()
  }

  handleTabSelected(topMenu: TopMenu) {
  	const colors = ['red', 'blue', 'black'];
  	const idx = Math.floor(Math.random() * 3);
  	this.scrollableTabBgColor = colors[idx];
  	console.log(topMenu)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
