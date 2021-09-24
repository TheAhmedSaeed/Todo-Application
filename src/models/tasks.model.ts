export interface Task {
  id: string;
  text: string;
  isDone: boolean;
  order: number;
}

export interface TaskSection {
  name: string;
  tasks: string[];
  showSection: boolean;
}
