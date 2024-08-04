import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { FinanceComponent } from './features/finance/finance.component';
import { LoansComponent } from './features/finance/loans/loans.component';
import { LoanApplicationComponent } from './features/finance/loans/loan-application/loan-application.component';
import { LoanHistoryComponent } from './features/finance/loan-history/loan-history.component';

export const routes: Routes = [
    { 
        path: '', 
        component: SidebarComponent, 
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'finance',
                component: FinanceComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        component: LoansComponent
                    },
                    {
                        path: 'loan-application',
                        component: LoanApplicationComponent,
                    },
                    {
                        path: 'history',
                        component: LoanHistoryComponent
                    },
                ]
            }
        ]
    }
];
