import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/**
 * Represents the CognitoFormComponent class.
 * This component is responsible for loading the Cognito Forms script and rendering the form.
 */
@Component({
  selector: 'app-cognito-form',
  standalone: true,
  imports: [],
  templateUrl: 'cognito-form.component.html',
  styles: []
})
export class CognitoFormComponent implements OnInit {
  
  /**
   * Creates an instance of CognitoFormComponent.
   * @param renderer - The Renderer2 instance used to create and manipulate DOM elements.
   * @param document - The Document instance representing the current HTML document.
   */
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  /**
   * Lifecycle hook that is called after data-bound properties of the component are initialized.
   * It loads the Cognito Forms script.
   */
  ngOnInit() {
    this.loadCognitoFormScript();
  }

  /**
   * Loads the Cognito Forms script by creating a script element and appending it to the document body.
   * <script src="https://www.cognitoforms.com/f/seamless.js" data-key="01huc4Jc0EmOkLmxC9tZnA" data-form="6"></script>
   */
  loadCognitoFormScript() {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.cognitoforms.com/f/seamless.js';  // TODO: Load in env
    script.setAttribute('data-key', '01huc4Jc0EmOkLmxC9tZnA');  // TODO: Load in env
    script.setAttribute('data-form', '6');                      // TODO: Load in env
    this.renderer.appendChild(this.document.body, script);

    script.onload = () => {
      console.log('Cognito Forms script loaded successfully, CSR generated.');
    };
  }

}
