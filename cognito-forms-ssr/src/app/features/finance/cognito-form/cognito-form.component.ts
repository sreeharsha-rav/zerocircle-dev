import { Component, OnInit, Inject, PLATFORM_ID, Input, ElementRef } from '@angular/core';
import { ScriptLoaderService } from '../services/script-loader/script-loader.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cognito-form',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class CognitoFormComponent implements OnInit {
  @Input() container!: ElementRef;

  constructor(
    private scriptLoader: ScriptLoaderService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && this.container) {
      this.loadCognitoForm();
    }
  }

  async loadCognitoForm() {
    try {

      // TODO: Load the form with input data-key and data-form attributes from parent component

      await this.scriptLoader.loadScript(
        'https://www.cognitoforms.com/f/seamless.js', 
        {
          'data-key': '01huc4Jc0EmOkLmxC9tZnA',
          'data-form': '2'
        },
        this.container.nativeElement
      );
      console.log('Cognito Forms script loaded successfully, SSR generated.');

      // TODO: Initialize the form after the script has loaded


    } catch (error) {
      console.error('Failed to load Cognito Forms script.', error);
    }
  }

}
