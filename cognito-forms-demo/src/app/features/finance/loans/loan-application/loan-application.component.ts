import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [
    MatButtonModule
],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent implements OnInit {
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

  onGoBack() {
    this.router.navigate(['/finance/home']);
  }
}
