import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';


export interface ImageSlider{
  imgUrl:string;
  link:string;
  caption:string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.sass'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[]=[];
  @Input() scrollHeight='160px'
  @ViewChild ('imageSlider',{static:true}) imgSlider!:ElementRef;
  @ViewChildren ('img') imgs!:QueryList<ElementRef>;
  @Input() intervalBySeconds:number=2;

  intervalID:any=0;
  selectedIndex=0;
  OnScroll(ev:any):void{
    const ratio=ev.target.scrollLeft * this.sliders.length /ev.target.scrollWidth;
    this.selectedIndex=Math.round(ratio)


  }
  getIndex(idx:number):number{
    return idx>=0 ? idx % this.sliders.length
    : this.sliders.length-Math.abs(idx % this.sliders.length)


  }

  // life cycle functions
  constructor(private rd2: Renderer2) { 
   
  }

  ngOnInit() {
    console.log("imgs",this.imgs)
    console.log('ngOnInit.Slider',this.imgSlider);
    // this.imgSlider.nativeElement.innerHTML=`<span>hello</span>`;
    
  }
  ngAfterViewInit():void{
    console.log('imgs',this.imgs);
    // this.imgs.forEach(item=>item.nativeElement.style.height="100px")
    // this.imgs.forEach(item=>{
    //   this.rd2.setStyle(item.nativeElement, "height",'100px')
    // })
    
    // use scroll-left for slide left
   
    this.intervalID= setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',(this.getIndex(++this.selectedIndex) % this.sliders.length)*this.imgSlider.nativeElement.scrollWidth/this.sliders.length)
      
    }, this.intervalBySeconds*1000);
  }
  ngOnDestroy(){
    clearInterval(this.intervalID);
  }
}
