import { Component, OnInit } from '@angular/core';
import { SMEService } from '../../services/sme.service';
import {CommunicatorService} from '../../services/communicator.service'

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {
  hasPressedEnter: boolean;
  topics: Array<number> = [1];
  lastNumber = this.topics.length;
  hasClickedAdd: boolean;
  constructor(private svc: SMEService,private com: CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Add Technology');
  }
enter() {
  this.hasPressedEnter = true;
}
addTopic() {
  this.hasClickedAdd = true;
  this.topics.push(++this.lastNumber);
}
postTechnology() {
  this.svc.postNewTechnology();
}
}


