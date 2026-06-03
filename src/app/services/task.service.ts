import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasks: Task[] = this.getLocalStorage();

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task[] {
    task.id = Date.now();
    this.tasks.push(task);
    this.setLocalStorage();
    return this.tasks;
  }

  updateTask(task: Task): Task[] {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    });

    this.setLocalStorage();
    return this.tasks;
  }

  removeTask(id: number): Task[] {
    this.tasks = this.tasks.filter((item) => {
      return item.id !== id;
    });

    this.setLocalStorage();

    return this.tasks;
  }

  toggleFinished(id: number): Task[] {
    console.log(id);
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          finished: task.finished === null ? new Date() : null,
        };
      }
      return task;
    });

    this.setLocalStorage();
    return this.tasks;
  }

  private setLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  private getLocalStorage(): Task[] {
    const storageTasks = localStorage.getItem(this.storageKey) || '[]';
    return JSON.parse(storageTasks);
  }

  constructor() {}
}
