const express = require('express');
const router = express.Router();
const { ProjectModel } = require('../models');
const { ProjectsController } = require('../controllers');
const AuthService = require('../services/auth');

const Projects = new ProjectsController(ProjectModel),
      Auth = new AuthService();

router.use(Auth.verify);

/* GET projects listing. */
router.get('/', Projects.find);

/* POST new project */
router.post('/', Projects.new);

/* PUT edit project */
router.put('/:id', Projects.update);

/* DELETE project by id. */
router.delete('/:id',Projects.delete);

module.exports = router;
