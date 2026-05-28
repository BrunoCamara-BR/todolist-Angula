export interface Task {
  title: string;
  id: number;
  priority: Priority;
  description: string;
  finished: Date | null;
}

export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}
