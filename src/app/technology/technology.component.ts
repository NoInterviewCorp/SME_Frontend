import { Component, OnInit } from '@angular/core';
import { Technology } from './technology.model';
import { SMEService } from '../../services/sme.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  techForm: FormGroup = new FormGroup({
    techControl : new FormControl('')
  });
  technologies: Technology[];
  topics: string[];
  hasSelectedTechnology:boolean=false;
  hasSelectedTopic:boolean=false;

  constructor(private svc: SMEService, private fb: FormBuilder) {
    this.getTechnologies();
   }

  ngOnInit() {
  }

  getTechnologies() {
    this.svc.showTechnologies().subscribe((res: any) => {
      this.technologies = res;
      console.log(this.technologies);
      this.techForm = this.fb.group({
        techControl: [this.technologies[0]]
      });
    });

  }
  getTopics() {
    this.hasSelectedTechnology=true;
    let tech= this.techForm.get('techControl').value as Technology;
    this.topics=tech.Topics;
    //this.topics = new Array(tech.Topics.length);
    tech.Topics.forEach((topic)=>{
      //this.topics[index] = topic;
      console.log(topic);
    })
    
  }
  getSubmit(){
    this.hasSelectedTopic=true;
  }
  
}
