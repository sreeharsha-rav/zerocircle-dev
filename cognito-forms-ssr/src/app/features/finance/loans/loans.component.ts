import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

interface Loan {
  id: number;
  type: string;
  amount: number;
  interestRate: number;
  term: string;
  status: string;
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  loans: Loan[] = [];

  constructor() { }

  ngOnInit(): void {
    // simulate fetching loans from an API
    this.loans = [
      { id: 1, type: 'Personal', amount: 10000, interestRate: 5.5, term: '3 years', status: 'Active' },
      { id: 2, type: 'Business', amount: 50000, interestRate: 4.2, term: '5 years', status: 'Pending' },
      { id: 3, type: 'Mortgage', amount: 200000, interestRate: 3.8, term: '30 years', status: 'Active' },
    ];
  }

}
