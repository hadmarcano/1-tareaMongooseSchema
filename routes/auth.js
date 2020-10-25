const express = require('express');
const router = express.Router();

const {
    signup,
    login
} = require('../controllers/auth');

const { requireSignupValidator, requireLoginValidator } = require('../validator/index');

// Routes...

router.post('/signup', requireSignupValidator, signup);

router.post('/signin', requireLoginValidator, login);

// Export modules...
module.exports = router;


