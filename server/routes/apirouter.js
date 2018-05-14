const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');

router.post('/register', usersController.signup);

module.exports = router;
