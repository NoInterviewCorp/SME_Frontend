import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Technology } from 'src/app/technology/technology.model';

@Injectable({
  providedIn: 'root'
})
export class SMEService {

  url = "http://localhost:5000/";
  constructor(private http: HttpClient) { }
  showTechnologies() {
    console.log('called technology');
    return this.http.get(this.url + "SME");
  }

  submitQuestions() {
    console.log('posted questions');
  }

  postNewTechnology(technology: Technology) {
    return this.http.post(this.url + "SME", technology);
  }

  postNewTopic() {

  }

}
