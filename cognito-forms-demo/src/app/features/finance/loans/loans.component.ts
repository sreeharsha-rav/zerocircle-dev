import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

interface Loan {
  id: number;
  type: string;
  description: string;
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  loans: Loan[] = [
    {
      id: 1,
      type: 'Green Bond Loan',
      description: 'Green bonds are a type of debt issued by public or private institutions to finance themselves and, unlike other credit instruments, they commit the use of the funds obtained to an environmental project or one related to climate change.'
    },
    {
      id: 2,
      type: 'Sustainability Linked Loan (SLL)',
      description: 'SLLs are loans where the interest rate is linked to the borrower\'s sustainability performance.'
    },
    {
      id: 3,
      type: 'SBA 504 Loan',
      description: 'Small businesses looking to grow their business can qualify for commercial real estate loans under SBA 504′s Green Loan program, and the SBA 504 Green Loan offers up to $5.5 million in financing per project from the SBA.'
    },
    {
      id: 4,
      type: 'C-PACE Loan',
      description: 'Commercial property-assessed clean energy (CPACE) is a financing structure in which building owners borrow money for energy efficiency, renewable energy, or other projects and make repayments via an assessment on their property tax bill. The financing arrangement then remains with the property even if it is sold, facilitating long-term investments in building performance.'
    },
    {
      id: 5,
      type: 'PPA Loan',
      description: 'A solar power purchase agreement (PPA) is a financial contract that allows you to "rent" solar panels without paying high upfront costs. With a PPA, a provider installs a solar power system on your property, and you pay for the electricity it generates. PPA contracts typically charge lower electricity prices than local tariffs, helping you achieve energy savings.'
    }
  ];
}
