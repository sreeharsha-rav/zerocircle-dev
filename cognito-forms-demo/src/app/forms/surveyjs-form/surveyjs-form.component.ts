import { Component, OnInit, Input } from '@angular/core';
import { SurveyModule } from 'survey-angular-ui';
import { Model } from "survey-core";

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]
};

@Component({
  selector: 'app-surveyjs-form',
  standalone: true,
  imports: [SurveyModule],
  template: `
  <p>Loan type: {{ loanType }}</p>
  <survey [model]="surveyModel"></survey>
`,
  styleUrl: './surveyjs-form.component.css'
})
export class SurveyjsFormComponent implements OnInit {
  @Input() loanType: string = '';
  title = 'My First Survey';

  surveyModel!: Model;

  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
  }

}
