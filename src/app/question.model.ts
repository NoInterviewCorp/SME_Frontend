import { Options } from "selenium-webdriver/chrome";

import { BloomTaxonomy } from "./bloomTaxonomy.model";

export class Questions{
    questionId: number
    problemStatement: string;
    options: Options[];
    resourceLink: string;
    bloomLevel: BloomTaxonomy;
    topicId: number;
    hasPublished: boolean;
}
