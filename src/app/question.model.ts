import { Options } from "selenium-webdriver/chrome";

import { BloomTaxonomy } from "./bloomTaxonomy.model";

export class Questions{
    ProblemStatement:string;
    Options:Options[];
    ResourceLink:string;
    BloomLevel: BloomTaxonomy;
}