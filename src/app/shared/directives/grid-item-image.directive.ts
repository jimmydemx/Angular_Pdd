import { Directive, ElementRef, HostListener, Input, Renderer2, HostBinding } from '@angular/core';

@Directive({ selector: '[appGridItemImage]' })
export class GridItemImageDirective {
    @Input() appGridItemImage='2rem'
    @Input() fitMode="cover";
    @HostBinding('style.grid-area') area='image'
    @HostBinding('style.width') width=this.appGridItemImage
    @HostBinding('style.height') height=this.appGridItemImage
    @HostBinding('style.object-fit') fit=this.fitMode
    constructor(private elr: ElementRef, private rd2:Renderer2) {
        // this.rd2.setStyle(this.elr.nativeElement,"grid-area",'image')
        // this.rd2.setStyle(this.elr.nativeElement,"width",this.appGridItemImage)
        // this.rd2.setStyle(this.elr.nativeElement,"height",this.appGridItemImage)
        // this.rd2.setStyle(this.elr.nativeElement,"object-fit", this.fitMode)
    }
    ngOnInit():void{
        // this.rd2.setStyle(this.elr.nativeElement,"grid-area",'image')
        // this.rd2.setStyle(this.elr.nativeElement,"width",this.appGridItemImage)
        // this.rd2.setStyle(this.elr.nativeElement,"height",this.appGridItemImage)
        // this.rd2.setStyle(this.elr.nativeElement,"object-fit", this.fitMode)

    }
    @HostListener('click',['$event.target'])
    onClick(ev:any){
        console.log(ev)

    }
}