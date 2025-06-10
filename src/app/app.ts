import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `Hello`,
  styles: `
    :host {
      color: blue
    }
  `,
})
export class App {}
