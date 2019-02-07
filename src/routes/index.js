import express from 'express';
import db from '../db/db.js';
import todoController from '../todosController/todos.js';

const router = express.Router();

router.get('/api/v1/todolist', todoController.getAllTodos);
router.get('/api/v1/todolist/:id', todoController.getTodo);
router.post('/api/v1/todolist', todoController.createTodo);
router.put('/api/v1/todolist/:id', todoController.updateTodo);
router.delete('/api/v1/todolist/:id', todoController.deleteTodo);

export default router;
