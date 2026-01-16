import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class TodoModel {
  static createTodo(title: string, description?: string): Todo {
    return {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
