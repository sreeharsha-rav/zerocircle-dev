import { Routes } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProfileComponent } from './features/profile/profile.component';
import { FinanceComponent } from './features/finance/finance.component';
import { LoansComponent } from './features/finance/loans/loans.component';

export const routes: Routes = [
    { 
        path: '', 
        component: SidebarComponent, 
        children: [
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
                    }
                ]
            }
        ]
    }
];
