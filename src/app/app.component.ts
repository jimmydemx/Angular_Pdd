import { Component } from '@angular/core';
import { Tabs } from './components';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  /* data */
  title = 'pdd';

  SelectedItem=-1;

  tabs:Tabs[]=[{
    item:"Men",
    link:""
  },{
    item:"Woman",
    link:""
  },{
    item:"Mobile",
    link:""
  },{
    item:"Clothes",
    link:""
  },{
    item:"Children",
    link:""
  },{
    item:"Baby",
    link:""
  },{
    item:"Accesories",
    link:""
  },{
    item:"Books",
    link:""
  },{
    item:"Perfume",
    link:""
  },{
    item:"Tickets",
    link:""
  },{
    item:"Coupons",
    link:""
  },
  ]

  /* 
     functions
  */
 onSelectTab(topMenu: Tabs){
    console.log(topMenu)
  


 }


}
