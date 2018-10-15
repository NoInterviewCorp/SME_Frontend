import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { SMEService } from '../../services/sme.service';
import { Questions } from '../question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  questions:Array<number>=[1,2];
  lastNumber = this.questions[this.questions.length -1];
  noerror:boolean;
  haserror:boolean=false;
  hasnoerror:boolean=false;
  hasClickedAdd:boolean=false;
 
  
  constructor(private svc: SMEService) { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.noerror);
    if(this.noerror){
      this.haserror=false;
      this.hasnoerror=true;
      console.log("no error");
      this.postQuestions();
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

  postQuestions(){
    this.svc.submitQuestions();
  }

  addQuestion(){
    //console.log("clicked");
    this.hasClickedAdd=true;
    this.questions.push(++this.lastNumber);
  }
}
