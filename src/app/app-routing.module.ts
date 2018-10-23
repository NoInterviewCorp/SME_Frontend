import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionsComponent} from './questions/questions.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
//import { QuestionlibraryComponent } from './questionlibrary/questionlibrary.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PublishedquestionsComponent } from './publishedquestions/publishedquestions.component';
import { SavedquestionsComponent } from './savedquestions/savedquestions.component';


const routes: Routes = [
  {path: '', component: ProfilepageComponent},
  {path:'home',component: HomeComponent},
  {path: 'home/questions', component: QuestionsComponent},
  {path: 'home/addtechnology', component: AddtechnologyComponent},
  {path: 'home/addtopic',component: AddtopicComponent},
  {path:'publishedquestions',component: PublishedquestionsComponent},
  {path:'savedquestions',component:SavedquestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
