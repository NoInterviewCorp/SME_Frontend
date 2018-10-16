import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionsComponent} from './questions/questions.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'addtechnology',component:AddtechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
