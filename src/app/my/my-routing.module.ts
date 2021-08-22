import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendContainerComponent } from '../recommend'

const routes: Routes = [
  {path: 'my', component:RecommendContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class MyRoutingModule { }
