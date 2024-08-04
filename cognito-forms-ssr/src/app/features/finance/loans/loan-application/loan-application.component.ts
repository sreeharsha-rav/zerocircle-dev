import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  template:`
  <button mat-raised-button color="primary" (click)="onGoBack()">Go Back</button>
    <div class="loan-application-header">
      <h3>Application for {{loanType}}</h3>
    </div>
  `,
  styles: [`
    .loan-application-header {
      display: block;
      text-align: center;

    }
    h3 {
      font-size: 1.5em;
      font-weight: bold;
    }
    button {
      margin: 1em;
    }
    `]
})
export class LoanApplicationComponent implements OnInit{
  loanType: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.loanType = params['type'];
    });
  }

  onGoBack() {
    this.router.navigate(['/finance/home']);
  }
}
