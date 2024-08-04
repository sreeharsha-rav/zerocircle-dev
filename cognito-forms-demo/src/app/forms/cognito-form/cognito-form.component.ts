import { Component, Input, OnInit, Renderer2, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';

/**
 * Represents the CognitoFormComponent class.
 * This component is responsible for loading the Cognito Forms script and rendering the form.
 */
@Component({
  selector: 'app-cognito-form',
  standalone: true,
  imports: [],
  template: `
    <p>Loan type: {{ loanType }}</p>
    <div #formContainer id="cognito-form-container"></div>
    `,
  styles: []
})
export class CognitoFormComponent implements OnInit, OnDestroy {
  @Input() loanType: string = '';
  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;

  private observer: MutationObserver | null = null;
  private formData: {[key: string]: string} = {};
  
  /**
   * Creates an instance of CognitoFormComponent.
   * @param renderer - The Renderer2 instance used to create and manipulate DOM elements.
   */
  constructor(
    private renderer: Renderer2,
    private ngZone: NgZone
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of the component are initialized.
   * It loads the Cognito Forms script.
   */
  ngOnInit() {
    this.loadCognitoFormScript();
    this.setupPersistentObserver();
  }

  ngOnDestroy() {
    this.cleanupListeners();
  }

  /**
   * Loads the Cognito Forms script by creating a script element and appending it to the document body.
   * <script src="https://www.cognitoforms.com/f/seamless.js" data-key="01huc4Jc0EmOkLmxC9tZnA" data-form="6"></script>
   */
  private loadCognitoFormScript() {
    const scriptElement = this.renderer.createElement('script');
    scriptElement.src = 'https://www.cognitoforms.com/f/seamless.js';  // TODO: Load in env
    scriptElement.setAttribute('data-key', '01huc4Jc0EmOkLmxC9tZnA');  // TODO: Load in env
    scriptElement.setAttribute('data-form', '6');                      // TODO: Load in env
    this.renderer.appendChild(this.formContainer.nativeElement, scriptElement);
    console.log('Cognito Forms script loaded');
  }

  private setupPersistentObserver() {
    this.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          this.ngZone.run(() => {
            this.handleDOMChanges();
          });
        }
      }
    });

    this.observer.observe(this.formContainer.nativeElement, { 
      childList: true, 
      subtree: true,
      attributes: true,
      characterData: true
    });
  }

  private handleDOMChanges() {
    const form = this.formContainer.nativeElement.querySelector('form');
    if (form) {
      this.setupFormListeners(form);
    }
  }

  private setupFormListeners(form: HTMLFormElement) {
    // Remove existing listeners to avoid duplicates
    form.removeEventListener('submit', this.handleSubmit);
    form.querySelectorAll('input, select, textarea').forEach(element => {
      element.removeEventListener('input', this.handleInputChange);
    });

    // Add new listeners
    form.addEventListener('submit', this.handleSubmit.bind(this));
    form.querySelectorAll('input, select, textarea').forEach(element => {
      element.addEventListener('input', this.handleInputChange.bind(this));
    });
  }

  private handleInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.formData[target.name] = target.value;
    console.log('Form data updated:', this.formData);
  }

  private handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log('Form submitted with data:', this.formData);
    // Here you can send the formData to your backend or perform any other action
  }

  private cleanupListeners() {
    if (this.observer) {
      this.observer.disconnect();
    }
    const form = this.formContainer.nativeElement.querySelector('form');
    if (form) {
      form.removeEventListener('submit', this.handleSubmit);
      form.querySelectorAll('input, select, textarea').forEach((element: any) => {
        element.removeEventListener('input', this.handleInputChange);
      });
    }
  }

}
