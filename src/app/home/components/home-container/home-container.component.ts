import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ImageSliderComponent } from 'src/app/shared/components/image-slider';
import { Tabs } from 'src/app/shared/components/scrollable-tab';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.sass']
})
export class HomeContainerComponent implements OnInit {

  
  
  constructor(private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl:string,
    private route: ActivatedRoute
   ){

  }
  //  
  
  

   /* data */
   title = 'pdd';

   SelectedItem=-1;
 
   scrollableTabBgColor="red";

   selectedTabLink$! :Observable<string>
 
   username='123';
 
   tabs$!:Observable<Tabs[]>;
 
 
  
 
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
  console.log("token baseUrl",this.baseUrl)
  
  }

  ngOnInit(): void {

    this.tabs$= this.service.getTabs()
    if(this.route.firstChild){
      this.selectedTabLink$=this.route.firstChild.paramMap.pipe(

        filter(params=> params.has('tabLink')),
        
        map(params=>{
          var p=params.get('tabLink')
          if(p) return p
          else return "error find fist child"
        })
        
    ) 
      
    }
    
  //   this.service.getTabs().subscribe(tabs=>{
  //     this.tabs=tabs
  //    console.log("tabs",tabs)}
  //     );
  //   console.log("ppppppp",this.service.tabs)
    
  // }
  }

}
