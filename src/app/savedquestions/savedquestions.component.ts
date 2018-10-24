import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../../services/communicator.service'


@Component({
  selector: 'app-savedquestions',
  templateUrl: './savedquestions.component.html',
  styleUrls: ['./savedquestions.component.css']
})
export class SavedquestionsComponent implements OnInit {

  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Saved');
  }

}
