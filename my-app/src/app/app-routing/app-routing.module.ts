import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { AboutComponent } from '../admin/about/about.component';
import { RxjsLearningComponent } from '../rxjs-learning/rxjs-learning.component';

export const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"rxjs",component:RxjsLearningComponent},
  {path:"",redirectTo:"dashboard",pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('this.routes',routes)
  }
 }
