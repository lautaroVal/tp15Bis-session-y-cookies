var express = require('express');
const { index, stored, message, logout } = require('../controllers/indexController');
const indexValidator = require('../validations/indexValidator');
var router = express.Router();

/* GET home page. */
router
  .get('/', index)
  .get('/message', message)
  .post('/stored',indexValidator, stored)
  .get("/logout", logout);

module.exports = router;
