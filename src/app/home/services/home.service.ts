import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel, ImageSlider, Tabs } from 'src/app/shared/components';
import { environment } from '../../../environments/environment';
import { Ad,Products } from 'src/app/shared/domain'; 

@Injectable()
export class HomeService{

  constructor(private http:HttpClient){

  }
    tabs:Tabs[]=[];
    // [{
    //     id:1,
    //     item:"Men",
    //     link:"Men"
    //   },{
    //      id:2,
    //     item:"Woman",
    //     link:"Woman"
    //   },{
    //     id:3,
    //     item:"Mobile",
    //     link:"Mobile"
    //   },{
    //     id:4,
    //     item:"Clothes",
    //     link:"Clothes"
    //   },{
    //     id:5,
    //     item:"Children",
    //     link:"Children"
    //   },{
    //     id:6,
    //     item:"Baby",
    //     link:"Baby"
    //   },{
    //     id:7,
    //     item:"Accesories",
    //     link:"Accesories"
    //   },{
    //     id:8,
    //     item:"Books",
    //     link:"Books"
    //   },{
    //     id:9,
    //     item:"Perfume",
    //     link:"Perfume"
    //   },{
    //     id:10,
    //     item:"Tickets",
    //     link:"Tickets"
    //   },{
    //     id:11,
    //     item:"Coupons",
    //     link:"Coupons"
    //   },
    //   ];
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
        title:'Computer',
        icon:'assets/icons/mianxingdiannao.svg',
        link:'hot'
      },
      {
        id:2,
        title:'Shop',
        icon:'assets/icons/mianxinggouwu.svg',
        link:'hot'
      },
      {
        id:3,
        title:'Headset',
        icon:'assets/icons/mianxingkefu.svg',
        link:'hot'
      },
      {
        id:4,
        title:'Rush',
        icon:'assets/icons/mianxingmima.svg',
        link:'hot'
      },
      {
        id:5,
        title:'File',
        icon:'assets/icons/xianxinggongzuo.svg',
        link:'hot'
      },
      {
        id:6,
        title:'Record',
        icon:'assets/icons/xianxingzhibo.svg',
        link:'hot'
      },
      {
        id:7,
        title:'Folder',
        icon:'assets/icons/xianxingzhuye.svg',
        link:'hot'
      },
      {
        id:8,
        title:'Alarm',
        icon:'assets/icons/xianxingjinggao.svg',
        link:'hot'
      },
      {
        id:9,
        title:'Friend',
        icon:'assets/icons/xianxingyonghu.svg',
        link:'hot'
      },
      {
        id:10,
        title:'Face',
        icon:'assets/icons/xianxingwode.svg',
        link:'hot'
      },
      {
        id:11,
        title:'Star',
        icon:'assets/icons/xianxingwenjianjia.svg',
        link:'hot'
      },
    ]
    

      getTabs(){
        return this.http.get<Tabs[]>(`${environment.baseUrl}/tabs`) 
      }

      getChannels(){
          return this.channels
      }
      getImageSliders(){
        return this.imageSliders
      }

      getAdbyTab(tab:string){

          return this.http.get<Ad>(`${environment.baseUrl}/ads`,{params:{categories_like:tab}}) 

      }

      getProductsbyTab(tab:string){

        return this.http.get<Products>(`${environment.baseUrl}/products`,{params:{categories_like:tab}}) 

    }


}