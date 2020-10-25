const express = require('express');
const router = express.Router();

const {
    userRelationById,
    getRelation,
    createRelation,
    deleteRelation
} = require('../controllers/relation');

// Routes...

router.get('/relation', getRelation);

router.post('/relation/create/:userRelationId', createRelation);

router.delete('/relation/:userRelationId', deleteRelation);

// Params...

router.param('userRelationId', userRelationById);

// Export modules...

module.exports = router;

