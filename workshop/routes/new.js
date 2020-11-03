var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'Olá Mundo - ',nome:"Helio Franca" });
});

module.exports = router;
