import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface LoanHistory {
  id: number;
  type: string;
  amount: number;
  dateApplied: Date;
  status: string;
}

@Component({
  selector: 'app-loan-history',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './loan-history.component.html',
  styleUrl: './loan-history.component.css'
})
export class LoanHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'type', 'amount', 'dateApplied', 'status'];
  loanHistory: LoanHistory[] = [];

  ngOnInit(): void {
    // Simulating data fetch
    this.loanHistory = [
      { id: 1, type: 'Personal', amount: 5000, dateApplied: new Date(2023, 1, 15), status: 'Approved' },
      { id: 2, type: 'Business', amount: 25000, dateApplied: new Date(2023, 3, 22), status: 'Denied' },
      { id: 3, type: 'Mortgage', amount: 150000, dateApplied: new Date(2023, 6, 7), status: 'Approved' },
      { id: 4, type: 'Personal', amount: 10000, dateApplied: new Date(2023, 8, 30), status: 'Pending' },
    ];
  }
}
