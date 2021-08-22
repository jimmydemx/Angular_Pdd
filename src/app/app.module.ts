import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { RecommendModule } from './recommend';
import { ProductModule } from './product';
import { MyModule } from './my';
import { ChatModule } from './chat';
import { CategoryModule } from './category';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
BrowserModule,
FormsModule,
SharedModule,
AppRoutingModule,
HomeModule,
HttpClientModule,
RecommendModule,
ProductModule,
MyModule,
ChatModule,
CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
