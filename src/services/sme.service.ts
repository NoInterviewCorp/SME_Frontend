import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SMEService {

  constructor(private http: HttpClient) { }
  showTechnologies() {
    console.log('called technology');
    return this.http.get('http://localhost:3000/Technology');
  }

}
