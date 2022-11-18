const express = require('express');
const router = express.Router();

const { createItem, getItems } = require('../controllers/mainController');

router.get('/items', getItems);
router.get('/create', createItem);

module.exports = router;
