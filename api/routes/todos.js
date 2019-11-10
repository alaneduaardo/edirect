var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', (req, res, next) => {
  res.send([]);
});

/* POST new todo */
router.post('/', (req, res, next) => {
  res.send({});
});

/* PUT edit todo */
router.put('/:id', (req, res, next) => {
  res.send({ id: req.param.id });
});

/* DELETE todo by id. */
router.delete('/:id', (req, res, next) => {
  res.send({ id: req.param.id });
});

module.exports = router;
