import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  panelOpenState = false;
  question = new FormControl('', [Validators.required]);
  option1 = new FormControl('', [Validators.required]);
  option2 = new FormControl('', [Validators.required]);
  option3 = new FormControl('', [Validators.required]);
  option4 = new FormControl('', [Validators.required]);
  
  
  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.question.hasError('required') ? 'You must enter a value' : '';     
  }

  getErrorMessage1() {
    return this.option1.hasError('required') ? 'You must enter a value' : '';     
  }

  getErrorMessage2() {
    return this.option2.hasError('required') ? 'You must enter a value' : '';     
  }

  getErrorMessage3() {
    return this.option3.hasError('required') ? 'You must enter a value' : '';     
  }

  getErrorMessage4() {
    return this.option4.hasError('required') ? 'You must enter a value' : '';     
  }


}
