import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../../services/communicator.service'



@Component({
  selector: 'app-publishedquestions',
  templateUrl: './publishedquestions.component.html',
  styleUrls: ['./publishedquestions.component.css']
})
export class PublishedquestionsComponent implements OnInit {

  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Posted');
  }

}
