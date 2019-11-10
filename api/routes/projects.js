var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.send([]);
});

/* GET fetch one project by id */
router.get('/:id', function(req, res, next) {
  res.send({ id: req.param.id });
});

/* POST new project */
router.post('/', function(req, res, next) {
  res.send({});
});

/* PUT edit project */
router.put('/:id', function(req, res, next) {
  res.send({ id: req.param.id });
});

/* DELETE project by id. */
router.delete('/:id', function(req, res, next) {
  res.send({ id: req.param.id });
});

module.exports = router;
