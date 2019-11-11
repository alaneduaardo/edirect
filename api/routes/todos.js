const express = require('express');
const router = express.Router();
const ProjectModel = require('../models/project');
const TodoModel = require('../models/todo');
const TodosController = require('../controllers/todos');

const Todos = new TodosController(TodoModel, ProjectModel);

/* POST new todo */
router.post('/', Todos.new);

/* PUT edit todo */
router.put('/:id', Todos.update);

/* DELETE todo by id. */
router.delete('/:id',Todos.delete);

module.exports = router;
