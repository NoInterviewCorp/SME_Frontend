import { Component, OnInit } from '@angular/core';
import { SMEService } from '../../services/sme.service';

@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {

  constructor(private svc: SMEService) { }
  ngOnInit() {
  }
  postTopic() {
    this.svc.postNewTopic();
  }
}
