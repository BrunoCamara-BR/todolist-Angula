import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/Task';
import { Priority } from '../../interfaces/Task';

@Component({
  selector: 'app-dialog',
  imports: [FormsModule],
  template: `
    <dialog open>
      <h2>{{ dialogMode === 'edit' ? 'Edit Task' : 'Add Task' }}</h2>
      <form>
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          [(ngModel)]="newTask.title"
        />

        <label for="description">Description:</label>
        <textarea
          name="description"
          id="description"
          [(ngModel)]="newTask.description"
        ></textarea>
        <p>Priority:</p>
        <div>
          <input
            type="radio"
            name="priority"
            id="low"
            [checked]="newTask.priority === priorityOptions.LOW"
            (change)="setPriority(priorityOptions.LOW)"
          />
          <label for="low">low</label>

          <input
            type="radio"
            name="priority"
            id="medium"
            [checked]="newTask.priority === priorityOptions.MEDIUM"
            (change)="setPriority(priorityOptions.MEDIUM)"
          />
          <label for="medium">medium</label>

          <input
            type="radio"
            name="priority"
            id="high"
            [checked]="newTask.priority === priorityOptions.HIGH"
            (change)="setPriority(priorityOptions.HIGH)"
          />
          <label for="high">high</label>
        </div>
        <button
          type="button"
          (click)="save()"
          [disabled]="
            newTask.title.trim() == '' || newTask.description.trim() == ''
          "
        >
          {{ dialogMode === 'edit' ? 'Save' : 'Add Task' }}
        </button>
        <button type="button" (click)="closeDialog()">Cancel</button>
      </form>
    </dialog>
  `,
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() newTask!: Task;

  @Input() dialogMode: 'add' | 'edit' = 'add';

  @Output() closeButton = new EventEmitter();

  @Output() saveTask = new EventEmitter();

  priorityOptions = Priority;

  closeDialog() {
    this.closeButton.emit();
  }

  save() {
    if (this.newTask.title.trim() === '' || this.newTask.description === '') {
      return;
    }
    this.saveTask.emit(this.newTask);
  }

  setPriority(priority: Priority) {
    this.newTask.priority = priority;
  }
}
