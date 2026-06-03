import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-todo-container',
  imports: [ListComponent],
  template: `
    <ul>
      @for (task of tasks; track task.id) {
        <app-list
          [task]="task"
          (removeTask)="removeTask.emit($event)"
          (editTask)="editTask.emit($event)"
          (toggleFinishedTask)="check($event)"
        ></app-list>
      }
    </ul>
  `,
  styleUrl: './todo-container.component.css',
})
export class TodoContainerComponent {
  @Input() tasks: Task[] = [];

  @Output() removeTask = new EventEmitter<number>();

  @Output() editTask = new EventEmitter<Task>();

  @Output() onToggleFinishedTask = new EventEmitter<number>();
  check(id: number) {
    this.onToggleFinishedTask.emit(id);
  }
}
