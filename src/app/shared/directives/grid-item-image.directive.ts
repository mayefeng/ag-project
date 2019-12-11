import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  
  @HostBinding('style.grid-area') area = 'image';
  @HostBinding('style.width') @HostBinding('style.height') @Input() appGridItemImage = '1rem';
  @HostBinding('style.object-fit') fit = 'cover';

  @HostListener('click', ['$event.target'])
  handleClick(ev) :void {
    console.log(ev);
  }
}