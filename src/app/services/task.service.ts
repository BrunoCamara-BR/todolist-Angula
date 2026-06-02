import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    task.id = Date.now();
    this.tasks.push(task);
    return this.tasks;
  }

  updateTask(task: Task): Task[] {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    });

    return this.tasks;
  }

  removeTask(id: number): Task[] {
    this.tasks = this.tasks.filter(item => {
      item.id !== id
    });
    return this.tasks;
  }

  constructor() {}
}
