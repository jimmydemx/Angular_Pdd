import { Component, ViewChild } from '@angular/core';
// import { HomeService } from './home';
import { Observable } from 'rxjs';
import { TabItem } from './shared/domain/index';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

 
  selectedIndex$!: Observable<number>


  OnTabSelected(tab: TabItem){

     this.router.navigate([tab.link]);





  }
constructor(private router: Router){

  this.selectedIndex$=this.router.events.pipe(
    filter((event: /* whatever */NavigationEnd | unknown): event is NavigationEnd => event instanceof NavigationEnd),
    map((ev:NavigationEnd)=>{
      const arr=ev.url.split('/')
      return arr.length>1 ? arr[1] : 'home'

    }),
    map(path=>this.getSelectedIndex(path))
    
    )
}
    getSelectedIndex(tab:string){

      return tab==='hot'? 1: 
              tab==='sorted'? 2 :
              tab==='chat'? 3 :
              tab==='my'? 4 :
              0 ;

    }
}
