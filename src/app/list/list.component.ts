import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { Task } from '../../interfaces/Task';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-list',
  imports: [ButtonComponent, CheckBoxComponent, DatePipe],
  template: `
    <li>
      <p class="title">
        {{ task.title }}
        <span class="priority"> - {{ task.priority }} </span>
      </p>
      <p class="id">id:{{ task.id }}</p>
      <p class="description">Description</p>
      <p class="desc-info">{{ task.description }}</p>
      <p class="finish">Finished date:</p>
      <p>{{ task.finished | date: 'dd/mm/yy, HH:mm' }}</p>
      <div class="option">
        <app-button text="Edit" (clickedButton)="Edit()" ></app-button>
        <app-button text="Remove" (clickedButton)="Remove()"></app-button>
      </div>
      <app-check-box (checkbox)="check()"> </app-check-box>
    </li>
  `,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() task!: Task;

  check() {
    if (this.task.finished == null) {
      this.task.finished = new Date();
    } else {
      this.task.finished = null;
    }
  }

  @Output() removeTask = new EventEmitter<number>();

  Remove() {
    this.removeTask.emit(this.task.id);
  }

  @Output() editTask = new EventEmitter<Task>();

  Edit() {
    this.editTask.emit(this.task);
  }
  
}
