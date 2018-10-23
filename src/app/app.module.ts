import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
import {QuestionformComponent} from './questionform/questionform.component';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions/questions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { AddtopicComponent } from './addtopic/addtopic.component';
import { PublishedquestionsComponent } from './publishedquestions/publishedquestions.component';
import { SavedquestionsComponent } from './savedquestions/savedquestions.component';
import { QuestionlibraryComponent } from './questionlibrary/questionlibrary.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material';
import { ProfilecardsComponent } from './profilecards/profilecards.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    HeadingComponent,
    HomeComponent,
    QuestionsComponent,
    QuestionformComponent,
    AddtechnologyComponent,
    AddtopicComponent,
    PublishedquestionsComponent,
    SavedquestionsComponent,
    QuestionlibraryComponent,
    ProfilepageComponent,
    ProfilecardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
