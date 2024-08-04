import { Component, Input, OnChanges, OnInit, Renderer2, ViewChild, ElementRef, SimpleChanges } from '@angular/core';

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
export class CognitoFormComponent implements OnInit, OnChanges {
  @Input() loanType: string = '';
  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;
  scriptElement!: HTMLScriptElement;
  
  /**
   * Creates an instance of CognitoFormComponent.
   * @param renderer - The Renderer2 instance used to create and manipulate DOM elements.
   */
  constructor(
    private renderer: Renderer2,
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of the component are initialized.
   * It loads the Cognito Forms script.
   */
  ngOnInit() {
    this.loadCognitoFormScript();
  }

  /**
   * Lifecycle hook that is called when any data-bound property of the component changes.
   * @param changes - The SimpleChanges object containing the changed properties of the component.
   * It reloads the Cognito Forms script.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loanType'] && !changes['loanType'].firstChange) {
      this.loadCognitoFormScript();
    }
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
  }

}
