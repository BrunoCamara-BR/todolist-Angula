import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: ` <button (click)="emitClick()">{{ text }}</button> `,
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = '';

  @Output() clickedButton = new EventEmitter();

  emitClick() {
    this.clickedButton.emit();
  }
}
