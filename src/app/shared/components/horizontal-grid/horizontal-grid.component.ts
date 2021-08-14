import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Emoji,Confirmable } from '../../decorators';


export interface Channel{
  id: number;
  icon: string;
  title: string;
  link: string; 

}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.sass']
})
export class HorizontalGridComponent implements OnInit {

  // variables
  private _username:string='';
  @Output() usernameChange=new EventEmitter();
  @Emoji() result='hello';

  @Input() cols=8;
  @Input() displayCols=5;
  sliderMargin='0'
 
  

  public get scrollable():boolean{
    return this.cols> this.displayCols;

  }

  
  public get templateRows() : string {
    return  `minmax(auto, max-content)`;
  }
  
  
  public get templateColumns() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem)/${this.displayCols}))`
    // return `17% 17% 17% 17% 17%`
  }
  

  constructor() { }
  channels:Channel[]=[
    {
      id:1,
      title:'限时秒杀',
      icon:'assets/icons/mianxingdiannao.svg',
      link:'hot'
    },
    {
      id:2,
      title:'其它',
      icon:'assets/icons/mianxinggouwu.svg',
      link:'hot'
    },
    {
      id:3,
      title:'限时秒杀',
      icon:'assets/icons/mianxingkefu.svg',
      link:'hot'
    },
    {
      id:4,
      title:'限时秒杀',
      icon:'assets/icons/mianxingmima.svg',
      link:'hot'
    },
    {
      id:5,
      title:'限时秒杀',
      icon:'assets/icons/xianxinggongzuo.svg',
      link:'hot'
    }
]

  ngOnInit() {
  }

  @Input()
  public get username(): string{

    return this._username;
  }

  public set username(v:string){
    this._username=v
    this.usernameChange.emit(v);
  }

  @Confirmable("您确认要执行吗？")
  Onclick(){
    console.log('click now')
  }

  onScroll(ev:any){

    this.sliderMargin=`0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`

  }

}
