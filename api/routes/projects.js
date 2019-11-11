const express = require('express');
const router = express.Router();
const ProjectModel = require('../models/project');
const ProjectsController = require('../controllers/projects');

const Projects = new ProjectsController(ProjectModel);

/* GET projects listing. */
router.get('/', Projects.find);

/* GET fetch one project by id */
router.get('/:id', Projects.findOne);

/* POST new project */
router.post('/', Projects.new);

/* PUT edit project */
router.put('/:id', Projects.update);

/* DELETE project by id. */
router.delete('/:id',Projects.delete);

module.exports = router;
