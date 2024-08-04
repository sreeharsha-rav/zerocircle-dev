import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';
import { CognitoFormComponent } from "../../cognito-form/cognito-form.component";

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [
    MatButtonModule,
    CognitoFormComponent
],
  template:`
    <button mat-raised-button color="primary" (click)="onGoBack()">Go Back</button>
    <div class="loan-header">
      <h3>{{loanType}}</h3>
    </div>
    <div #formContainer></div>
    <app-cognito-form [container]="formContainerRef"></app-cognito-form>
  `,
  styles: [`
    .loan-header {
      display: block;
      text-align: center;
    }
    button {
    }
    h3 {
      font-size: 1.5em;
      font-weight: bold;
    }
    `]
})
export class LoanApplicationComponent implements OnInit, AfterViewInit {
  @ViewChild('formContainer', { static: true }) formContainerRef!: ElementRef;
  loanType: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // get loan type from query params
    this.route.queryParams.subscribe(params => {
      this.loanType = params['type'];
    });
  }

  ngAfterViewInit(): void {
    // TODO: Pass the loan type to the form component
  }

  onGoBack() {
    this.router.navigate(['/finance/home']);
  }

}
