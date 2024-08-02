import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  companyProfile = {
    name: 'Apple Inc.',
    duns: '060704780',
    yearEstablished: 1977,
    address: 'ONE APPLE PARK WAY, CUPERTINO, California, United States',
    businessNature: 'Mfg radio/tv communication equipment',
    phoneNumber: '+1-408-996-1010',
    entityType: 'Corporation',
    legalStatus: 'Corporation',
    annualRevenue: '$383,285,000,000.00',
    employees: {
      consolidated: 161000,
      individual: 1310
    },
    registrationNumbers: {
      cageCode: '58839',
      taxId: '94-2404110',
      businessRegNumber: '0806592',
      gsaUniqueId: 'HJAKCN4NEU95'
    },
    industryCodes: {
      naics2022: '334220 - Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing',
      naceRev2: '2630 - Manufacture of communication equipment',
      sic1987: '3663 - Mfg radio/tv communication equipment'
    },
    about: `Apple designs, manufactures and markets smartphones, personal computers, tablets, wearables, and accessories. The company also offers and sells a variety of related services. Apple products include its famous iPhone, which is the company's line of smartphones basing on its iOS operating system. The company recently released its iPhone 15 product line last year. Other apple products also include Mac computers and iPad tablets Apple Music, the Apple Watch, and other wearable devices. Its' services include AppleCare, Cloud Services, Digital content, and Payment services (ApplePay). Apple has entered entertainment with the Apple TV+ streaming service. About 60% of Apple's revenue comes from outside the Americas.`
  };
}
