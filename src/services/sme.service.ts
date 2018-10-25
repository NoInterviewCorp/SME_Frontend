import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Technology } from 'src/app/technology/technology.model';
import { Questions } from 'src/app/question.model';

@Injectable({
  providedIn: 'root'
})
export class SMEService {

  url = "http://localhost:5000/";
  constructor(private http: HttpClient) { }
  showTechnologies() {
    return this.http.get(this.url + "all");
  }

  submitQuestions(questions:Questions[]) {
    console.log('posted questions');
    for (let index = 0; index < questions.length; index++) {
      
    }
  }

  postNewTechnology(technology: Technology) {
    return this.http.post(this.url + "SME", technology);
  }

  postNewTopic() {

  }

}
