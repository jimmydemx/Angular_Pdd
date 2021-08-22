import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TabItem} from '../../domain'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  

  @Input() selectedIndex!: number| null;
  @Output() tabSelected=new EventEmitter();

  tabItems: TabItem[]= [
    {
     title:"Home",
     icon:'assets/icons/home.svg' ,
     link:'home',
     selectedIcon:'assets/icons/home-act.svg'
  },
  {
    title:"Hot",
    icon:'assets/icons/rec.svg' ,
    link:'hot',
    selectedIcon:'assets/icons/rec-act.svg'
 },
 {
  title:"Sorted",
  icon:'assets/icons/classify.svg' ,
  link:'sorted',
  selectedIcon:'assets/icons/classify-act.svg'
},
{
  title:"Chat",
  icon:'assets/icons/chat.svg' ,
  link:'chat',
  selectedIcon:'assets/icons/chat-act.svg'
},
{
  title:"My",
  icon:'assets/icons/personal.svg' ,
  link:'my',
  selectedIcon:'assets/icons/personal-act.svg'
}


]


OnSelectedTab(idx:number){

  this.selectedIndex=idx;
  this.tabSelected.emit(this.tabItems[idx])


}
  constructor() { }

  ngOnInit() {
  }

}
