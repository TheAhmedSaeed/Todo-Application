export interface Task {
  id: string;
  text: string;
  isDone: boolean;
  showTask: boolean;
}

export interface TaskSection {
  id: string;
  name: string;
  tasks: Task[];
  showSection: boolean;
}
