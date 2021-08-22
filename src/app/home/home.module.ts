import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components';
import { HomeService,token} from './services';

@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers:[HomeService,{provide:token, useValue:'http://localhost:4200'}]
  
})
export class HomeModule { }
