const express = require('express');
const router = express.Router();
const { TodoModel, ProjectModel } = require('../models');
const { TodosController } = require('../controllers');
const AuthService = require('../services/auth');

const Todos = new TodosController(TodoModel, ProjectModel),
      Auth = new AuthService();

router.use(Auth.verify);

/* POST new todo */
router.post('/', Todos.new);

/* PUT edit todo */
router.put('/:id', Todos.update);

/* DELETE todo by id. */
router.delete('/:id',Todos.delete);

module.exports = router;
