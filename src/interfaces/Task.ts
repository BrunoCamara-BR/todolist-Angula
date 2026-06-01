export interface Task {
  title: string;
  id: number | null;
  priority: Priority | null;
  description: string;
  finished: Date | null;
}

export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}
