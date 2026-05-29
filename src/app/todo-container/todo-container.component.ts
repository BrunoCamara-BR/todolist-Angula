import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';


@Component({
  selector: 'app-todo-container',
  imports: [ListComponent],
  template: `
    <ul>
      <app-list></app-list>
    </ul>
  `,
  styleUrl: './todo-container.component.css',
})
export class TodoContainerComponent {
 
}
