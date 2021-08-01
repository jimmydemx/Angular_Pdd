import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

export interface Tabs{
  item:string,
  link: string

}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.sass']
})
export class ScrollableTabComponent implements OnInit {

  /* data */
  

  SelectedItem=-1;

  @Input() tabs:Tabs[]=[];
  @Output() tabSelected=new EventEmitter();

  /* 
     functions
  */
  onClickItem(index:number){
    this.SelectedItem=index
    this.tabSelected.emit(this.tabs[this.SelectedItem])
  
  }


  constructor() { }

  ngOnInit(): void {
  }

}
