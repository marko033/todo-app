export enum TaskState {
  Todo = 'TODO',
  Progress = 'PROGRESS',
  Done = 'DONE',
}
export interface ITodoTask {
  id: number;
  title: string;
  description: string;
  state: TaskState;
  listId: number;
}

export interface ITodoList {
  id: number;
  name: string;
}
