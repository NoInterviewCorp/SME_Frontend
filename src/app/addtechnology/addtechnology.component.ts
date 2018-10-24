import { Component, OnInit } from '@angular/core';
import { SMEService } from '../../services/sme.service';
import { CommunicatorService } from '../../services/communicator.service'
import { Topics } from '../topic.model';
import { Technology } from '../technology/technology.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtechnology',
  templateUrl: './addtechnology.component.html',
  styleUrls: ['./addtechnology.component.css']
})
export class AddtechnologyComponent implements OnInit {
  hasPressedEnter: boolean;
  technologyName = "";
  topics: Array<Topics> = [new Topics("")];
  lastNumber = this.topics.length;
  hasClickedAdd: boolean;
  constructor(private svc: SMEService, private com: CommunicatorService, private router: Router) { }

  ngOnInit() {
    this.com.setTitle('Add Technology');
  }
  enter() {
    this.hasPressedEnter = true;
  }
  addTopic() {
    this.hasClickedAdd = true;
    this.topics.push(new Topics(""));
  }
  postTechnology() {
    let technology = new Technology();
    technology.name = this.technologyName;
    technology.topics = this.topics;
    // console.log(technology);
    this.svc.postNewTechnology(technology).subscribe((response) => {
      console.log(response);
      this.router.navigate(['home']);
    });
  }
}


