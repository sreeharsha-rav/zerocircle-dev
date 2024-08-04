# zerocircle-dev
A development repo for ZeroCircle internship.

## Projects

- [`cognito-forms-demo`](./cognito-forms): A minimal demonstration of embedding cognito forms in an angular app.
    - Roadmap:
        - [x] Implement CSR(Client-Side Rendering) of minimal zero-circle UI.
        - [x] Routing to match forms in ZeroCircle UI.
        - [x] Embed cognito forms demo in the app.
        - [ ] Fix visual bugs in embedded cognito forms.
        - [ ] Add SurveyJS POC (Proof of Concept) as a form alternative.

- [`cognito-forms-ssr`](./cognito-forms-ssr): A minimal clone of zero-cirlce's cognito forms with server-side rendering.
    - Roadmap:
        - [x] Minimal Clone the ZeroCircle UI
        - [x] Add server-side rendering.
        - [x] Routing for different components.
        - [x] Rendering of cognito forms.
        - [ ] Get data from reading cognito forms.
        - [ ] Maintain state of the cognito forms.

## Getting Started

### Prerequisites

- Node.js
- Angular CLI 18.1.3
- NPM
- VSCode (or any other code editor)

### Installation

1. Clone the repo
   ```sh
   git clone <repo-url>
   ```

2. Go to the appropiate project directory
   ```sh
   cd <project-name>
   ```

3. Install NPM packages
   ```sh
    npm install
    ```

4. Run the project
    ```sh
    ng serve
    ```

5. Open the project in your browser at `http://localhost:4200/`.