import { Component, OnInit } from '@angular/core';
import { Technology } from './technology.model';
import { SMEService } from '../../services/sme.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Topics } from '../topic.model';



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
  buttonClicked:boolean=false;
  

  constructor(private svc: SMEService, private fb: FormBuilder) {
    this.getTechnologies();
   }

  ngOnInit() {
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
    this.buttonClicked=true;
  }

 
}
