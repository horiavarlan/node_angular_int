const express = require('express');
const router = express.Router();

const ctrlProducts = require('../controllers/products');
const ctrlOthers = require('../controllers/others');

router.get('/api/products', ctrlProducts.list);
router.get('/api/products/:id', ctrlProducts.view);

router.post('/api/contact',ctrlOthers.contact);

module.exports = router;