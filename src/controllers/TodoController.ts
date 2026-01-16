import { Request, Response } from 'express';
import TodoService from '../services/TodoService';

class TodoController {
  // Create a new todo
  createTodo(req: Request, res: Response): void {
    try {
      const { title, description } = req.body;

      if (!title || title.trim() === '') {
        res.status(400).json({ error: 'Title is required' });
        return;
      }

      const todo = TodoService.createTodo(title, description);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create todo' });
    }
  }

  // Get all todos
  getAllTodos(req: Request, res: Response): void {
    try {
      const todos = TodoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todos' });
    }
  }

  // Get a single todo
  getTodoById(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const todo = TodoService.getTodoById(id);

      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch todo' });
    }
  }

  // Update a todo
  updateTodo(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const updates = req.body;

      const todo = TodoService.updateTodo(id, updates);

      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  }

  // Delete a todo
  deleteTodo(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const deleted = TodoService.deleteTodo(id);

      if (!deleted) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  }

  // Mark todo as completed
  completeTodo(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const todo = TodoService.completeTodo(id);

      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to complete todo' });
    }
  }

  // Mark todo as incomplete
  incompleteTodo(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const todo = TodoService.incompleteTodo(id);

      if (!todo) {
        res.status(404).json({ error: 'Todo not found' });
        return;
      }

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to mark todo as incomplete' });
    }
  }
}

export default new TodoController();
