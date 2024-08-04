import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router, RouterOutlet, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  navLinks = [
    { path: 'home', label: 'Loans' },
    { path: 'history', label: 'Loan History' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
