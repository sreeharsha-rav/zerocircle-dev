import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'cognito-forms-demo';
}
