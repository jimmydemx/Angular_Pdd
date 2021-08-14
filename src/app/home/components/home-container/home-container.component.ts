import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/shared/components/horizontal-grid';
import { ImageSlider, ImageSliderComponent } from 'src/app/shared/components/image-slider';
import { Tabs } from 'src/app/shared/components/scrollable-tab';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.sass']
})
export class HomeContainerComponent implements OnInit {
  
  
  constructor(private router: Router){

  }
  
  ngOnInit(): void {
    
  }

   /* data */
   title = 'pdd';

   SelectedItem=-1;
 
   scrollableTabBgColor="red";
 
   username='123';
 
   tabs:Tabs[]=[{
     id:1,
     item:"Men",
     link:"Men"
   },{
      id:2,
     item:"Woman",
     link:"Woman"
   },{
     id:3,
     item:"Mobile",
     link:"Mobile"
   },{
     id:4,
     item:"Clothes",
     link:"Clothes"
   },{
     id:5,
     item:"Children",
     link:"Children"
   },{
     id:6,
     item:"Baby",
     link:"Baby"
   },{
     id:7,
     item:"Accesories",
     link:"Accesories"
   },{
     id:8,
     item:"Books",
     link:"Books"
   },{
     id:9,
     item:"Perfume",
     link:"Perfume"
   },{
     id:10,
     item:"Tickets",
     link:"Tickets"
   },{
     id:11,
     item:"Coupons",
     link:"Coupons"
   },
   ];
 
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
 
 @ViewChild ('imageSlider') imgSlider!: ImageSliderComponent
   /* 
      functions：topMenu recieve the clicked tabs
      this.router.navigate(['home',topMenu.link]) will jump to home/clicked
   */
  onSelectTab(topMenu: Tabs){
    this.router.navigate(['home',topMenu.link])
     console.log(topMenu)
     const colors=['red','blue','black']
     const idx= Math.floor(Math.random()*3);
     this.scrollableTabBgColor=colors[idx]
  }
 
  /* 
     life cycle
  */
  ngAfterViewInit(){
 
   console.log("sliders",this.imgSlider);
  }
}
