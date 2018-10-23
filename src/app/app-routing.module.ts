import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuestionsComponent} from './questions/questions.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { QuestionlibraryComponent } from './questionlibrary/questionlibrary.component';
import { QuestionformComponent } from './questionform/questionform.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  {path: '', component: ProfilepageComponent},
  {path:'home',component: HomeComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'addtechnology', component: AddtechnologyComponent},
  {path: 'addtopic',component: AddtopicComponent},
  {path: 'questionlibrary',component: QuestionlibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
