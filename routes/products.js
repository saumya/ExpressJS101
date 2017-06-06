var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('products', { title: 'Hand Made Products' });
});

router.get('/1', function(req, res, next) {
  res.render('productDetail', { title: 'Product 1' });
});

module.exports = router;
