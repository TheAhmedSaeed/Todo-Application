export interface Task {
  id: string;
  text: string;
  isDone: boolean;
}

export interface TaskSection {
  id: string;
  name: string;
  tasks: Task[];
  showSection: boolean;
}
