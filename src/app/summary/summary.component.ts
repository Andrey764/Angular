import { Component, OnInit } from '@angular/core';
import { SummaryClass } from 'c:/Users/negri/Desktop/Учеба/AngularP2/Practic/src/app/SumaryClass';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [SummaryClass]
})
export class SummaryComponent implements OnInit {
  Languages: string[] = [];
  Frameworks: string[] = [];
  constructor(public summary: SummaryClass){
    this.addLanguage("TypeScript");
    this.addFramefork("Angular");
  }
  addLanguage(language: string){
  this.summary.Languages.addLanguage(language);
  }
  addFramefork(framework: string){
    this.summary.Frameworks.addFrameworks(framework);
  }
  ngOnInit(){
  this.Languages = this.summary.Languages.getLanguages();
  this.Frameworks = this.summary.Frameworks.getFrameworks();
  }
}
