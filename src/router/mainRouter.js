const express = require('express');
const router = express.Router();
const { validateRegistration } = require('../middleware/authValidator');

const {
  createItem,
  getItems,
  register,
  login,
  getOneItem,
} = require('../controllers/mainController');

router.get('/', getItems);
router.post('/createItem', createItem);
router.post('/register', validateRegistration, register);
router.post('/login', login);
router.get('/items/:id', getOneItem);
module.exports = router;
