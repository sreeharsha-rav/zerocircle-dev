# CognitoFormsDemo

A simple minimal ZeroCircle UI with cognito forms embedded in an angular app. CSR(Client-Side Rendered) version.

## Roadmap

- [x] Implement CSR(Client-Side Rendering) of minimal zero-circle UI.
- [x] Routing to match forms in ZeroCircle UI.
- [x] Embed cognito forms demo in the app.
- [ ] Fix visual bugs in embedded cognito forms.
- [ ] Add SurveyJS POC (Proof of Concept) as a form alternative.

## Project Structure

```
cognito-forms-demo
├── src
│   ├── app                                     # Angular App
│   │   ├── features/
│   │   │   ├── profile/                        # Profile View
│   │   │   ├── finance/                        # Finance View
│   │   │   ├── loan-history/                   # Loan History View
│   │   │   ├── loans/                          # Loans View
│   │   │   |   ├── loan-application/           # Loan Application View
│   │   │   
│   │   ├── forms/                              # Forms
│   │   │   ├── cognito-form/                   # Cognito Form for CSR
│   │   │   ├── survey-js-form/                 # TODO: SurveyJS Form for CSR
|   |   |
│   │   ├── layout
│   │   │   ├── sidebar/                        # Sidebar Component
│   │   │
│   │   ├── app.component.ts                    # App Component
│   │   ├── app.routes.ts                       # App Routes
│   │   ├── other files...
....
```
