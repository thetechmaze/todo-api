import { Todo, TodoModel } from '../models/Todo';

class TodoService {
  private todos: Todo[] = [];

  constructor() {
    this.initializeDefaultTodos();
  }

  // Initialize default todos
  private initializeDefaultTodos(): void {
    this.todos = [
      {
        id: '1',
        title: 'Complete project documentation',
        description: 'Write comprehensive documentation for the API endpoints',
        completed: true,
        createdAt: new Date('2026-01-15'),
        updatedAt: new Date('2026-01-16'),
      },
      {
        id: '2',
        title: 'Setup Docker configuration',
        description: 'Create Dockerfile and docker-compose for containerization',
        completed: true,
        createdAt: new Date('2026-01-16'),
        updatedAt: new Date('2026-01-17'),
      },
      {
        id: '3',
        title: 'Implement Swagger UI',
        description: 'Add Swagger documentation and UI for API testing',
        completed: true,
        createdAt: new Date('2026-01-17'),
        updatedAt: new Date('2026-01-17'),
      },
      {
        id: '4',
        title: 'Add database integration',
        description: 'Integrate MongoDB or PostgreSQL for persistent storage',
        completed: false,
        createdAt: new Date('2026-01-17'),
        updatedAt: new Date('2026-01-17'),
      },
      {
        id: '5',
        title: 'Implement authentication',
        description: 'Add JWT-based authentication for API security',
        completed: false,
        createdAt: new Date('2026-01-17'),
        updatedAt: new Date('2026-01-17'),
      },
      {
        id: '6',
        title: 'Write unit tests',
        description: 'Create comprehensive unit tests for all endpoints',
        completed: false,
        createdAt: new Date('2026-01-17'),
        updatedAt: new Date('2026-01-17'),
      },
    ];
  }

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
