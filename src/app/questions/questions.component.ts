import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  questions = [1];
  noerror:boolean;
  haserror:boolean=false;
  hasnoerror:boolean=true;
 
  
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.noerror);
    if(this.noerror){
      this.haserror=false;
      this.hasnoerror=true;
    }
    else{
      this.haserror=true;
      this.hasnoerror=false;
    }
  }

  handleEventEmitter(hasNoError:boolean){
    this.noerror = hasNoError
    // console.log(hasNoError);
  }
}
