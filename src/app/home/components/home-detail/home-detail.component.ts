import { Component, Inject, Injectable, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared/components';

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

  selectedtabLink:string | null='';
  date=new Date();
  username='123';
  imageSliders:ImageSlider[]=[{
    imgUrl:"https://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
    link:"",
      caption:"",
  },{
 imgUrl: "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
    link:"",
    caption:""
  },{
    imgUrl: "https://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
    link:"",
    caption:""
  }
]

// channels
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
  },
  {
    id:6,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
  {
    id:7,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
  {
    id:8,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
  {
    id:9,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
  {
    id:10,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
  {
    id:11,
    title:'限时秒杀',
    icon:'assets/icons/xianxinggongzuo.svg',
    link:'hot'
  },
]

  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

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
          }
        ]
      })  

      console.log("injector",injector.get(Product))


      this.route.paramMap.subscribe(params=>{
        console.log("路径参数", params)
      this.selectedtabLink=params.get('tabLink')
      
      this.route.queryParamMap.subscribe(params=>{
        console.log("查询参数",params)
      })

    })
  }

}
