var express = require('express');
const { index, stored, message } = require('../controllers/indexController');
const indexValidator = require('../validations/indexValidator');
var router = express.Router();

/* GET home page. */
router
  .get('/', index)
  .get('/message', message)
  .post('/stored',indexValidator, stored)

module.exports = router;
