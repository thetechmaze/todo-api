import { Todo, TodoModel } from '../models/Todo';

class TodoService {
  private todos: Todo[] = [];

  // Create a new todo
  createTodo(title: string, description?: string): Todo {
    const todo = TodoModel.createTodo(title, description);
    this.todos.push(todo);
    return todo;
  }

  // Get all todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Get a single todo by ID
  getTodoById(id: string): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  // Update a todo
  updateTodo(id: string, updates: Partial<Todo>): Todo | undefined {
    const todo = this.getTodoById(id);
    if (!todo) return undefined;

    Object.assign(todo, updates, { updatedAt: new Date() });
    return todo;
  }

  // Delete a todo
  deleteTodo(id: string): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) return false;

    this.todos.splice(index, 1);
    return true;
  }

  // Mark todo as completed
  completeTodo(id: string): Todo | undefined {
    return this.updateTodo(id, { completed: true });
  }

  // Mark todo as incomplete
  incompleteTodo(id: string): Todo | undefined {
    return this.updateTodo(id, { completed: false });
  }
}

export default new TodoService();
