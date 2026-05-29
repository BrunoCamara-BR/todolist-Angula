import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckBoxComponent } from '../check-box/check-box.component';

@Component({
  selector: 'app-list',
  imports: [ButtonComponent, CheckBoxComponent],
  template: `
    <li>
      <p class="title">
        {{ title }}
        <span class="priority"> - {{ priority }} </span>
      </p>
      <p class="id">id:{{ id }}</p>
      <p class="description">Description</p>
      <p class="desc-info">{{ description }}</p>
      <p class="finish">Finished date:</p>
      <p>{{ done }}</p>
      <div class="option">
        <app-button text="Edit"></app-button>
        <app-button text="Remove"></app-button>
      </div>
      <app-check-box (checkbox)="check()"> </app-check-box>
    </li>
  `,
  styleUrl: './list.component.css',
})
export class ListComponent {
  title: string = 'Read Books';
  priority: string = 'high';
  id: number = 289;
  description: string = 'Read 5 pages per day.';
  finished: string = '28/05/2026, 10:14';
  done: Date | null = null;

  // depois melhorar esta lógica de toogle
  check() {
    if (this.done == null) {
      this.done = new Date(Date.now());
    } else {
      this.done = null;
    }
  }
}
