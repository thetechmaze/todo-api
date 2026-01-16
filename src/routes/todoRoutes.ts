import { Router } from 'express';
import TodoController from '../controllers/TodoController';

const router = Router();

// Create a new todo
router.post('/', TodoController.createTodo.bind(TodoController));

// Get all todos
router.get('/', TodoController.getAllTodos.bind(TodoController));

// Get a single todo
router.get('/:id', TodoController.getTodoById.bind(TodoController));

// Update a todo
router.put('/:id', TodoController.updateTodo.bind(TodoController));

// Delete a todo
router.delete('/:id', TodoController.deleteTodo.bind(TodoController));

// Mark todo as completed
router.patch('/:id/complete', TodoController.completeTodo.bind(TodoController));

// Mark todo as incomplete
router.patch('/:id/incomplete', TodoController.incompleteTodo.bind(TodoController));

export default router;
