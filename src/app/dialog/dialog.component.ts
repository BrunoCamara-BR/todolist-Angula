import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/Task';
import { Priority } from '../../interfaces/Task';

@Component({
  selector: 'app-dialog',
  imports: [FormsModule],
  template: `
    <dialog open>
      <!-- <h2>{{ dialogModeName }}</h2> -->
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
            (change)="SetPriority(priorityOptions.LOW)"
          />
          <label for="low">low</label>

          <input
            type="radio"
            name="priority"
            id="medium"
            (change)="SetPriority(priorityOptions.MEDIUM)"
          />
          <label for="medium">medium</label>

          <input
            type="radio"
            name="priority"
            id="high"
            (change)="SetPriority(priorityOptions.HIGH)"
          />
          <label for="high">high</label>
        </div>
        <button type="button" (click)="Save()">Save</button>
        <button type="button" (click)="closeDialog()">Cancel</button>
      </form>
    </dialog>
  `,
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() newTask!: Task;

  priorityOptions = Priority;

  @Output() closeButton = new EventEmitter();

  closeDialog() {
    this.closeButton.emit();
  }

  @Output() saveTask = new EventEmitter();
  Save() {
    this.saveTask.emit(this.newTask);
  }

  SetPriority(priority: Priority) {
    this.newTask.priority = priority;
  }
}
