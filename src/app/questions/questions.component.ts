import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SMEService } from '../../services/sme.service';
import { Questions } from '../question.model';
import { ErrorStatus } from './errorstatus.model';
import {CommunicatorService} from '../../services/communicator.service'


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: Array<number> = [1, 2, 3, 4, 5];
  lastNumber = this.questions.length - 1;
  noerror: Array<boolean> = [false, false];
  haserror: boolean = false;
  hasnoerror: boolean = false;
  hasClickedAdd: boolean = false;



  constructor(private svc: SMEService,private com:CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Add Questions');
  }

  onClick() {
    let result: boolean;
    // this.noerror.forEach(elem=>console.log(elem));
    for (let i = 0; i < this.noerror.length - 1; i++) {
      result = (this.noerror[i]) && (this.noerror[i + 1]);
    }

    console.log(result);
    if (result) {
      this.haserror = false;
      this.hasnoerror = true;
      console.log("no error");
      this.postQuestions();
    }
    else {
      this.haserror = true;
      this.hasnoerror = false;
    }
  }

  handleEventEmitter(errorstatus: ErrorStatus) {
    //this.noerror = hasNoError
    // console.log(hasNoError);
    let index = errorstatus.MemberId - 1;
    this.noerror[index] = errorstatus.HasError;
  }

  postQuestions() {
    this.svc.submitQuestions();
  }

  addQuestion() {
    //console.log("clicked");
    this.hasClickedAdd = true;
    this.questions.push(++this.lastNumber);
    this.noerror.push(false);
  }
}
