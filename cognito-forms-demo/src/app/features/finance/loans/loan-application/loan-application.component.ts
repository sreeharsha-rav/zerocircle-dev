import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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

  onFormDataChanged(formData: any) {
    console.log('Form data changed:', formData);
    // Here you can update your component's state, send data to a service, etc.
  }
}
