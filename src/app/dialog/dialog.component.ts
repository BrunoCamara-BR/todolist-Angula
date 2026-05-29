import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  template: `
    <dialog open>
      <h2>{{ dialogModeName }}</h2>
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" value="{{ dialogTitle }}" />

        <label for="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value="{{ dialogDescription }}"
        ></textarea>

        <p>Priority:</p>
        <div>
          <input type="radio" name="priority" id="low" />
          <label for="low">low</label>

          <input type="radio" name="priority" id="medium" />
          <label for="medium">medium</label>

          <input type="radio" name="priority" id="high" />
          <label for="high">high</label>
        </div>
        <button type="button">Save</button>
        <button type="button" (click)="closeDialog()">Cancel</button>
      </div>
    </dialog>
  `,
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  @Input() dialogModeName = '';
  @Input() dialogTitle = '';
  @Input() dialogDescription = '';
  @Input() dialogPriority = '';

  @Output() closeButton = new EventEmitter();

  closeDialog() {
    this.closeButton.emit();
  }
}
