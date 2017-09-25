var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main');

var ctrlProducts = require('../controllers/products');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', function(req,res){
  req.redirect('/products');
});

router.get('/products',ctrlProducts.list);
router.get('/products/:id', ctrlProducts.view);
router.get('/contact', ctrlOthers.contact);
router.post('/contact', ctrlOthers.contact);

module.exports = router;
