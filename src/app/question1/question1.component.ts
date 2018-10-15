import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {
  @Input() id: number;
  @Output() noError = new EventEmitter();
  //panelOpenState = false;
  question = new FormControl('', [Validators.required]);
  options: FormControl[] = [
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required])
  ];
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  isValidArray:boolean[] = new Array(7).fill(false);

  constructor() {
  }

  ngOnInit() {
    // this.noError.emit(true);
  }

  getErrorMessage() {
    this.noError.emit(false);
    this.isValidArray[0] = false;
    return this.question.hasError('required') ? 'You must enter a value' : '';
  }

  getValidMessage(index:number) {
    this.isValidArray[index] = true;
    let areAllValid = true;
    // this.isValidArray.forEach(isValidItem => areAllValid = (areAllValid && isValidItem));
    for(let i =0;i < this.isValidArray.length;i++){
      areAllValid = (areAllValid && this.isValidArray[i]);
    }
    this.noError.emit(areAllValid);
  }

  getErrorMessage1(index:number) {
    this.noError.emit(false);
    this.isValidArray[index+1] = false;
    return this.options[index].hasError('required') ? 'You must enter a value' : '';
  }


 
  getErrorMessage5() {
    this.noError.emit(false);
    this.isValidArray[5] = false;
    return this.resourcelink.hasError('required') ? 'You must enter a value' : '';
  }



  getErrorMessage6() {
    this.noError.emit(false);
    this.isValidArray[6] = false;
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';
  }


}
