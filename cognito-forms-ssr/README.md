# CognitoFormsSsr

A simple minimal clone of ZeroCircle's cognito forms with server-side rendering.

## Roadmap

- [x] Minimal Clone the ZeroCircle UI
- [x] Add server-side rendering.
- [x] Routing for different components.
- [x] Rendering of cognito forms.
- [ ] Get data from reading cognito forms.
- [ ] Maintain state of the cognito forms while navigating.

## Project Structure

```
cognito-forms-ssr
├── src
│   ├── app                                     # Angular App
│   │   ├── features/
│   │   │   ├── profile/                        # Profile View
│   │   │   ├── finance/                        # Finance View
│   │   │   |   ├── cognito-form/               # Cognito Form for SSR
│   │   │   |   ├── loan-history/               # Loan History View
│   │   │   |   ├── loans/                      # Loans View
│   │   │   |   |   ├── loan-application/       # Loan Application View
│   │   │   |   ├── services/                   # Services
│   │   │   |   |   ├── script-loader           # Script Loader Service for cognito forms SSR
│   │   │   |   |   ├── forms                   # Dummy forms service for future use
│   │   ├── layout
│   │   │   ├── sidebar/                        # Sidebar Component
│   │   │   
│   │   ├── app.component.ts                    # App Component 
│   │   ├── app.routes.ts                       # App Routes
│   │   ├── other files
....
```

### Issues

- [ ] Not able to read data from cognito forms.