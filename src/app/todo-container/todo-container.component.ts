import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
// import { Task, Priority } from '../../interfaces/Task';

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
  // getLocal(): Array<Task> {
  //   return JSON.parse(localStorage.getItem('taskList') || '[]');
  // }
  // setLocal(TaskList: Array<Task>) {
  //   localStorage.setItem('taskList', JSON.stringify(TaskList));
  // }
  // addTask(title: string, priority: Priority, description: string): void {
  //   const newTask: Task = {
  //     title: title,
  //     id: 123,
  //     priority: priority,
  //     description: description,
  //     finished: null,
  //   };
  //   this.updateLocal(newTask);
  // }
  // updateLocal(task: Task) {
  //   const TaskList = this.getLocal();
  //   TaskList.push(task);
  //   this.setLocal(TaskList);
  // }
}
