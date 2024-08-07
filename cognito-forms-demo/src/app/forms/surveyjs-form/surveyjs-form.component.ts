import { Component, OnInit, Input } from '@angular/core';
import { SurveyModule } from 'survey-angular-ui';
import { Model } from "survey-core";
import { loanPOC_json } from './loans/LoanPOC';
import "survey-core/defaultV2.css";
import { DefaultLightPanelless } from "survey-core/themes";

@Component({
  selector: 'app-surveyjs-form',
  standalone: true,
  imports: [SurveyModule],
  template: `
  <p>Loan type: {{ loanType }}</p>
  <survey [model]="surveyModel"></survey>
`,
  styles: []
})
export class SurveyjsFormComponent implements OnInit {
  @Input() loanType: string = '';
  title = 'My First Survey';

  surveyModel!: Model;

  /**
   * Initializes the component.
   * 
   * @remarks
   * This method is called when the component is being initialized.
   * It creates a new survey model using the provided surveyJson,
   * applies a theme to the survey, and sets up an event listener
   * for survey completion.
   */
  ngOnInit() {
    const survey = new Model(loanPOC_json);
    survey.applyTheme(DefaultLightPanelless);
    survey.onComplete.add(this.alertResults);
    this.surveyModel = survey;
  }

  alertResults(sender: any) {
    const results = JSON.stringify(sender.data);
    alert(results);
  }

}
