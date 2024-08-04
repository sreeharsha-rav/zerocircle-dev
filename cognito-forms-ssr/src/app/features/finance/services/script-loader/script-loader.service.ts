import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

/**
 * Service for dynamically loading external scripts into the document.
 * Handles both browser and server-side environments.
 */
@Injectable({
  providedIn: 'root'
})
export class ScriptLoaderService {
  /** Keeps track of scripts that have been loaded to prevent duplicate loading */
  private loadedScripts: { [url: string]: boolean } = {};

  /**
   * @param platformId - Injection token for determining the current platform (browser or server)
   * @param document - Injection token for the Document object
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Loads a script by URL and applies optional attributes.
   * 
   * @param url - The URL of the script to load
   * @param attributes - Optional key-value pairs of attributes to add to the script tag
   * @returns A Promise that resolves when the script is loaded, or rejects on error
   */
  loadScript(
    url: string, 
    attributes: { [key: string]: string } = {}, 
    targetElement?: HTMLElement
  ): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // If script is already loaded, resolve immediately
      if (this.loadedScripts[url]) {
        resolve();
        return;
      }

      if (isPlatformBrowser(this.platformId)) {
        // Create script element
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        // Add custom attributes
        Object.keys(attributes).forEach((key) => {
          script.setAttribute(key, attributes[key]);
        });

        // Set up load and error handlers
        script.onload = () => {
          this.loadedScripts[url] = true;
          resolve();
        };
        script.onerror = (error: any) => reject(error);

        // Append script to target element or document body
        if (targetElement) {
          targetElement.appendChild(script);
        } else {
          this.document.body.appendChild(script);
        }
      } else {
        // For server-side rendering, we return a resolved promise.
        resolve(null as any);
      }
    });
  }

}
