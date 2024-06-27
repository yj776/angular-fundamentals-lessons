import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


// Component is a decorator. We can add properties to it.
// Dectorator is a pattern. It allows us to take a property or class and able to add in some behaviors to it. In this case, we adding on behaviors to make it a component. 

@Component({
  selector: 'app-root',   // Dectorators are reference in our HTML templates. Therefore we need a selector
  standalone: true,   // flag to turn off module. Meaning what you get in this component and is what you get.
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Harry Potter</li>
      <li>My hero Academia</li>
      <li>Solo Leveling</li>
    </ol>
  `,
  styles: `
    ol {
      list-style-type: upper-roman
    }
  `,  // styles are scoped to the component and will not leak out
})
export class AppComponent {} // angular does not support function components. There's no logic in this case, so it's empty. Currently angular only supports class component.