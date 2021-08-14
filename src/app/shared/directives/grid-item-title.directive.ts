import { Directive, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[appGridItemTitle]' })
export class GridItemTitleDirective {

    @HostBinding('style.font-size') @Input() appGridItemTitle= 'title'
    @HostBinding('style.grid-area') area='title'
 
}