import { Questions } from "./question.model";

export class Topics{
    TopicId:number;
    Name:string;
    Questions:Questions[];
    TechnologyId:number;

    constructor(_name:string){
        this.Questions = [];
        this.Name = _name;
    }
}