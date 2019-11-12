var express = require('express');
var router = express.Router();

/* GET app health check */
router.get('/', (req, res, next) => {
  res.send({"app":"Edirect Test API", "frontend":"React", "backend":"Express"});
});

module.exports = router;
