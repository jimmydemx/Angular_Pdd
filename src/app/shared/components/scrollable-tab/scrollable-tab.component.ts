import { Component, 
  OnInit,
  Input,
  Output,EventEmitter,
  SimpleChange, 
  OnChanges, 
  ChangeDetectionStrategy} from '@angular/core';

export interface Tabs{
  id:number;
  item:string,
  link: string

}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.sass'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {

  /* data */
  


  SelectedItem:number=0;
  @Input() selectedTabLink:string | null ='';
  @Input() tabs:Tabs[]| null=[];
  @Input() backgroundColor="#fff";
  @Input() titleActiveColor='yellow';
  @Input() titleColor="blue";
  @Input() indicatorColor="brown";
  @Output() tabSelected=new EventEmitter();
  
  /* 
     functions
  */
  onClickItem(index:number){
    this.SelectedItem=index
    if(this.tabs){

    this.tabSelected.emit(this.tabs[this.SelectedItem])
    }
     
  
  }

 
 /* Hooks */
  constructor() { }
 
  ngOnChanges(changes: SimpleChange):void{
    console.log("ngOnChanges",changes)

  }
  
  ngAfterContentInit():void{

    console.log("ngAfterContentInit")

  }

  ngAfterContentChecked():void{

    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit():void{
    console.log("ngAfterViewInit")

  }
  ngDoCheck():void{
    console.log("ngDoCheck")

  }
  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngOnDestroy():void{
    console.log("ngOnDestroy")
  }


}

