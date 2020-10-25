const express = require('express');
const router = express.Router();

const {
    getTweets,
    fallowersTweets,
    createTweet,
    deleteTweet
} = require('../controllers/tweet');

const {
    isTweetValid
} = require('../validator/index');

// Routes...

router.get('/tweets', getTweets);

router.get('/tweets/followers', fallowersTweets);

router.post('/tweet/create', isTweetValid, createTweet);

router.delete('/tweet/:tweetId', deleteTweet);

// Params...

router.param('tweetId', tweetById);

// Export modules...

module.exports = router;