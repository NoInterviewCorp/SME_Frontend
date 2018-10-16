import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologyComponent } from './technology/technology.component';
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
import { Question1Component } from './question1/question1.component';
import { AddtechnologyComponent } from './addtechnology/addtechnology.component';
import { AddtopicComponent } from './addtopic/addtopic.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyComponent,
    HeadingComponent,
    HomeComponent,
    QuestionsComponent,
    Question1Component,
    AddtechnologyComponent,
    AddtopicComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
