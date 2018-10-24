import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../../services/communicator.service'


@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  // Title:string;
  constructor(private com: CommunicatorService) { }

  ngOnInit() {
    // this.Title=this.com.getTitle();
  } 

  titleFromComponent(){
    return this.com.getTitle();
  }
}
