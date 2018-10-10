import { Component, OnInit } from '@angular/core';
import { Technology } from './technology.model';
import {SMEService} from '../../services/sme.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
technologies:Technology[];
topics:string[];
//res: any = [];

  constructor(private svc:SMEService) { }

  ngOnInit() {
    this.getTechnologies();
  }
getTechnologies(){
  this.svc.showTechnologies().subscribe((res: any) => {
    this.technologies = res;
    console.log(this.technologies);
      });
}
getTopics(event:any){
  console.log(event.target.value);
}
}
