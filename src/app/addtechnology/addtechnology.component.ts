import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {
  hasPressedEnter:boolean;
  topics:Array<number>=[1];
  lastNumber = this.topics.length;
  hasClickedAdd:boolean;
 
  constructor() { }

  ngOnInit() {
  }

enter(){
  this.hasPressedEnter=true;
}

addTopic(){
  this.hasClickedAdd=true;
  this.topics.push(++this.lastNumber);
}
}
