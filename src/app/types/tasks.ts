export enum TaskState {
  Todo = 'TODO',
  Progress = 'PROGRESS',
  Done = 'DONE',
}
export interface TodoTask {
  id: number;
  title: string;
  description: string;
  state: TaskState;
  listId: number;
}

export interface TodoList {
  id: number;
  name: string;
}
