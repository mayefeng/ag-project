import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

export interface TopMenu {
  id: number;
	title: string;
	link: string;
	// link?: string;
	// readonly link: string;
}

// interface AddFunc {
// 	(x: number, y: number): number
// }

// interface Dict {
// 	[key: string]: string;
// }

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * 接口是可选的，也就说只要有类似 ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口，好处一个是不会由于误删除某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */
export class ScrollableTabComponent 
	implements 
	    OnInit,
	    OnChanges,
	    AfterContentInit,
	    AfterContentChecked,
	    AfterViewInit,
	    AfterViewChecked,
	    OnDestroy {

  /**
   * 第一个执行，构造函数是建立这个类的实例
   * 之所以我们没有显性的使用 new ScrollableTabComponent()
   * 是因为系统框架帮我们做了这个，这是依赖注入的概念
   */
  constructor() {
  	// console.log('组件构造调用')
  }

  /**
   * 组件的 `@Input` 属性变化时调用
   * @param changes 一个索引对象，用以体现变化之前和当前的值
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('输入变化', changes);
  }
  /**
   * 组件初始化，这个钩子函数中，可以安全的使用组件中的属性和方法
   */
  ngOnInit(): void {
    // console.log('组件初始化');
  }

  // ngDoCheck(): void {
  // 	console.log('组件脏值检测')
  // }
  
  /**
   * 组件中嵌套的 `<ng-content>` 的内容初始化完成
   */
  ngAfterContentInit(): void {
    // console.log('内容初始化');
  }
  /**
   * 组件中嵌套的 `<ng-content>` 的内容的变化脏值检查
   */
  ngAfterContentChecked(): void {
    // console.log('内容脏值检查');
  }
  /**
   * 组件视图渲染完成，可以安全的操作视图中的元素
   */
  ngAfterViewInit(): void {
    // console.log('视图初始化');
  }
  /**
   * 组件视图的脏值检查
   */
  ngAfterViewChecked(): void {
    // console.log('视图脏值检查');
  }
  /**
   * 组件销毁时调用，一般发生在父组件 ngIf 或路由变化时
   */
  ngOnDestroy(): void {
    // console.log('组件销毁');
  }

  selectedIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown'
  @Output() tabSelected = new EventEmitter();

  // add: AddFunc = (x, y) => x + y;

  // dict: Dict = {
  // 	a: '1',
  // 	b: '2'
  // }

  // constructor() {
  // 	console.log(this.dict['a'])
  // }
  handleSelection(index: number) {
  	this.selectedIndex = index
  	this.tabSelected.emit(this.menus[this.selectedIndex])
  }
}
