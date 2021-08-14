import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeDetailComponent } from './components';

@NgModule({
  declarations: [HomeContainerComponent,HomeDetailComponent],
  imports: [
  
  SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
