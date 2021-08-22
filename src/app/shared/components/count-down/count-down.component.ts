import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.sass']
})
export class CountDownComponent implements OnInit {

  @Input() startDate=new Date();
  @Input() futureDate!: Date;
  countDown$!: Observable<string>;
  private _MS_PER_SECOND=1000

  constructor() { }

  ngOnInit() {
    // interval: Creates an Observable that emits sequential numbers every 1000 milisecond

   //this.countDown$=interval(1000).pipe(map((elapse)=>`${elapse}`))
   this.countDown$=this.getCountDownObservable(this.startDate,this.futureDate)
   
  }


  private getCountDownObservable(startDate:Date, futureDate:Date){

    return interval(1000).pipe(map(elapse=> this.diffInSec(startDate,futureDate)-elapse),
    takeWhile(gap=>gap >=0),map((sec)=>({
      day: Math.floor(sec /3600/24),
      hour: Math.floor((sec/ 3600 )%24),
      minute: Math.floor((sec/ 60) % 60),
      second: Math.floor(sec % 60)
           })
     ),
     map(date=>`${date.day}days :${date.hour}hours :${date.minute} minute:${date.second} seconds`)
  )



  }
  private diffInSec=(start:Date, future:Date)=>{
    // getTIme mil second
    const diff= future.getTime()-start.getTime();
    return Math.floor(diff/this._MS_PER_SECOND)
  }

}
