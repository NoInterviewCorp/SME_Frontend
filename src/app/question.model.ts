import { Options } from "selenium-webdriver/chrome";

import { BloomTaxonomy } from "./bloomTaxonomy.model";

export class Questions{
    QuestionId: number
    ProblemStatement: string;
    Options: Options[];
    ResourceLink: string;
    BloomLevel: BloomTaxonomy;
    TopicId: number;
}
