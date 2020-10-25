const express = require('express');
const router = express.Router();

const {
    uploadAvatar,
    uploadBanner,
    getAvatar,
    getBanner
} = require('../controllers/file');

// Routes...

router.post('/file/avatar/upload', uploadAvatar);

router.post('/file/banner/upload', uploadBanner);

router.get('/file/avatar', getAvatar);

router.get('/file/banner', getBanner);

// Export modules...
module.exports = router;
