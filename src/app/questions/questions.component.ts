import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  questions = [1,2,3,4,5];
  
  constructor() { }

  ngOnInit() {
  }
  
  handleNext(){
    
  }


}
