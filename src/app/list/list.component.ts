import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckBoxComponent } from '../check-box/check-box.component';

@Component({
  selector: 'app-list',
  imports: [ButtonComponent, CheckBoxComponent],
  template: `
    <p >
      {{ title }}
      <span> - {{ priority }} </span>
    </p>
    <p>id:{{ id }}</p>
    <p>Description</p>
    <p>{{ description }}</p>
    <p>Finished date:</p>
    <p>{{ done }}</p>
    <app-button text="Edit"></app-button>
    <app-button text="Remove"></app-button>
    <app-check-box (checkbox)="check()" > </app-check-box>
  `,
  styleUrl: './list.component.css',
})
export class ListComponent {
  title: string = 'Read Books';
  priority: string = 'high';
  id: number = 289;
  description: string = 'Read 5 pages per day.';
  finished: string = '28/05/2026, 10:14';
  done: Date | null= null;

  // depois melhorar esta lógica de toogle
  check() {
    if (this.done == null) {
      this.done = new Date(Date.now());
    } else {
      this.done = null;
    }
  }
}
