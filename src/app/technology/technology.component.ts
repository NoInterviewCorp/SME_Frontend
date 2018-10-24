import { Component, OnInit } from '@angular/core';
import { Technology } from './technology.model';
import { SMEService } from '../../services/sme.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Topics } from '../topic.model';
import {CommunicatorService} from '../../services/communicator.service';



@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  selectedValue:Technology;
  selectedTopic:string;
  technologies: Technology[];
  topics: Topics[];
  hasSelectedTechnology:boolean=false;
  hasSelectedTopic:boolean=false;
  hasSubmitButtonClicked:boolean=false;
  

  constructor(private svc: SMEService, private fb: FormBuilder,private com: CommunicatorService) {
    this.getTechnologies();
   }

  ngOnInit() {
    this.com.setTitle('Technology');
  }

  getTechnologies() {
    this.svc.showTechnologies().subscribe((res: any) => {
      this.technologies = res;
      console.log(this.technologies);
    });
  }
  getTopics() {
    this.hasSelectedTechnology=true;
    this.topics=this.selectedValue.Topics;
  }
  getSubmit(){
    this.hasSelectedTopic=true;
  }
  
  postQuestionsForm(){
    this.hasSubmitButtonClicked=true;
  }

 
}
