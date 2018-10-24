import { Questions } from "./question.model";

export class Topics{
    topicId:number;
    name:string;
    questions:Questions[];
    technologyId:number;

    constructor(_name:string){
        this.questions = [];
        this.name = _name;
    }
}