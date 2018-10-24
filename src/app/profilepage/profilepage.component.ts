import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../../services/communicator.service'


@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  constructor(private com:CommunicatorService) { }

  ngOnInit() {
    this.com.setTitle('Welcome');
  }
}
