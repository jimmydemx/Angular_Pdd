import { Component, Inject, Injectable, Injector, NgZone, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { token } from '../../services';
import { HomeService } from '../../services/home.service';
import {filter, map,switchMap,tap} from 'rxjs/operators'
import { Ad,Products } from 'src/app/shared/domain';


@Injectable()
class Product {
  constructor(@Inject(String) private name:string,@Inject(String)private color:string){
  }
}

@Injectable()
class PurchaseOrder{
  private product: Product;
 
  constructor(){
    this.product=new Product("xiaomi","blue");
  }
}


@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.sass']
})
export class HomeDetailComponent implements OnInit {


  // count down
  startDate=new Date(2019,6,1);
  futureDate= new Date(2019,6,2)



  //

  selectedtabLink$!:Observable<string |null> ;

  date=new Date();
  username='123';
  imageSliders=this.service.getImageSliders()
  // ElementRef是一个class
  @ViewChild('timeRef',{static:true}) timeRef!:ElementRef;
  // @ViewChild('inputRef',{static:true}) inputRef!:ElementRef;

  _time:number=0;
  public get time(){

    return this._time
  }

  // channels
  channels=this.service.getChannels()
  sub!:Subscription


  ad$!:Observable<any>

  products$!:Observable<any>

  
  constructor(private route: ActivatedRoute, 
    private service:HomeService,
    private ngZone:NgZone,
    private cd:ChangeDetectorRef
    ) { }

  ngOnInit() {
    // fromEvent return a Observable
    // fromEvent(this.inputRef.nativeElement,'input').subscribe((ev:any)=>{
    //   console.log(ev.target.value)
    // })


    // injectors
      const injector=Injector.create({
        providers:[
          {
            provide:Product,
            useFactory:()=>{
              return new Product("xiaomi","dark")
            },
            deps:[]
          },{
            provide: PurchaseOrder,
            useClass:PurchaseOrder,
            deps:[Product]
          },{
            provide:token,
            useValue:"http://localhost:4200"

          }
        ]
      })  

      console.log("injector",injector.get(Product))
      console.log("token",injector.get(token))

      // filter（params.has）过滤有tabLink的params{tabLink:xxx}
      this.selectedtabLink$=this.route.paramMap.pipe(filter(params=>params.has('tabLink')),
      map(params=>params.get("tabLink")),map(
          params=>{
            if(typeof params==="string"){
            this.ad$=this.service.getAdbyTab(params).pipe(map(val=>val.data),tap(val=>console.log(val)))
            this.products$=this.service.getProductsbyTab(params).pipe(map(val=>val.data.goodsData),tap(val=>console.log(val)))
            }
            return params
          }
        )
      )

      // this.route.paramMap.subscribe(params=>{
      //   console.log("路径参数", params)
      // this.selectedtabLink=params.get('tabLink')
      
      this.sub=this.route.queryParamMap.subscribe(params=>{
        console.log("查询参数",params)
      })

      //this.ad$=this.service.getAdbyTab(this.selectedtabLink).pipe(tap(val=>console.log(val)))

    
  }

  ngAfterViewChecked():void{
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.timeRef.nativeElement.innerText=Date.now()
        
      },100);

    })


  }

  ngOnDestroy():void{
    this.sub.unsubscribe();

  }

}
function fomatDate(arg0: number, arg1: string, arg2: string): any {
  throw new Error('Function not implemented.');
}



