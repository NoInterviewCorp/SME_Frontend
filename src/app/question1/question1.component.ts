import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  @Input() id : number;
  @Output() noError = new EventEmitter();
  //panelOpenState = false;
  question = new FormControl('', [Validators.required]);
  option1 = new FormControl('', [Validators.required]);
  option2 = new FormControl('', [Validators.required]);
  option3 = new FormControl('', [Validators.required]);
  option4 = new FormControl('', [Validators.required]);
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  
  constructor() { 
  }
  
  ngOnInit() {
   // this.noError.emit(true);
  }

  getErrorMessage() {
    console.log("called error message");
    this.noError.emit(false);
    return this.question.hasError('required') ? 'You must enter a value' : '';     
  }

  getValidMessage(){
    this.noError.emit(true);
  }

  getErrorMessage1() {
    this.noError.emit(false);
    return this.option1.hasError('required') ? 'You must enter a value' : '';     
  }


 getErrorMessage2() {
    this.noError.emit(false);
    return this.option2.hasError('required') ? 'You must enter a value' : '';     
  }

 

  getErrorMessage3() {
    this.noError.emit(false);
    return this.option3.hasError('required') ? 'You must enter a value' : '';     
  }

 

  getErrorMessage4() {
    this.noError.emit(false);
    return this.option4.hasError('required') ? 'You must enter a value' : '';     
  }

  

  getErrorMessage5() {
    this.noError.emit(false);
    return this.resourcelink.hasError('required') ? 'You must enter a value' : '';     
  }

 

  getErrorMessage6() {
    this.noError.emit(false);
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';     
  }

  
}
