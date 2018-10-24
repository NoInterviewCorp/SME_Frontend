import { Component, OnInit } from '@angular/core';
import { SMEService } from '../../services/sme.service';
import {CommunicatorService} from '../../services/communicator.service'


@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  constructor(private svc: SMEService,private com: CommunicatorService) { }
  ngOnInit() {
    this.com.setTitle('Add Topic');
  }
  postTopic() {
    this.svc.postNewTopic();
  }
}
