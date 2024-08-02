import { Component } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import {AsyncPipe, CommonModule} from '@angular/common';
import { LoansComponent } from './loans/loans.component';
import { LoanHistoryComponent } from './loan-history/loan-history.component';

export interface FinanceTab {
  label: string;
  component: any;
}

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe, LoansComponent, LoanHistoryComponent, CommonModule],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  asyncTabs: Observable<FinanceTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<FinanceTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'Loans', component: LoansComponent },
          { label: 'Loan History', component: LoanHistoryComponent }
        ]);
      }, 100); // 100ms delay to simulate network request
    });
  }
}
