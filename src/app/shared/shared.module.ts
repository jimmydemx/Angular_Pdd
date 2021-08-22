import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent,ImageSliderComponent,HorizontalGridComponent, CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent } from './components/';
import { GridItemDirective,GridItemImageDirective,GridItemTitleDirective } from './directives';
import { AgoPipe } from './pipes';


@NgModule({
  declarations: [	
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    VerticalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    ProductCardComponent

  
    
   ],
    
  imports: [
CommonModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    VerticalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe,CountDownComponent,
    FooterComponent,
   ProductCardComponent
  
  ]
})
export class SharedModule { }
