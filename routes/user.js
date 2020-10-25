const express = require('express');
const router = express.Router();

const {
    getUser,
    listUsers,
    updateUser
} = require('../controllers/user');

// Routes...

router.get('/user/list', listUsers);

router.get('/user/profile', getUser);

router.put('/user', updateUser);

// Export modules...

module.exports = router;
