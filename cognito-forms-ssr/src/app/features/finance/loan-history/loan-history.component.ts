import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

interface LoanHistory {
  id: number;
  loanType: string;
  amount: number;
  status: string;
  term?: string;
}

@Component({
  selector: 'app-loan-history',
  standalone: true,
  imports: [MatTableModule, MatMenuModule, MatIconModule],
  templateUrl: './loan-history.component.html',
  styleUrl: './loan-history.component.css'
})
export class LoanHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'loanType', 'amount', 'status', 'term', 'actions'];
  loanHistory: LoanHistory[] = [];

  ngOnInit() {
    // Simulating data fetch
    this.loanHistory = [
      { id: 1, loanType: 'Green Bond Loan', amount: 1000000, status: 'Approved', term: '5 years' },
      { id: 2, loanType: 'Sustainability Linked Loan', amount: 500000, status: 'Pending' },
      { id: 3, loanType: 'SBA 504 Loan', amount: 3500000, status: 'Approved', term: '10 years' },
      { id: 4, loanType: 'C-PACE Loan', amount: 750000, status: 'Approved', term: '20 years' },
    ];
  }

  editLoan(loan: LoanHistory) {
    console.log('Edit loan:', loan);
    // Implement edit logic here
  }

  deleteLoan(loan: LoanHistory) {
    console.log('Delete loan:', loan);
    // Implement delete logic here
  }
}
